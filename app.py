# Import necessary modules
from flask import Flask, request, render_template, send_file, jsonify
from jinja2 import Template
import subprocess
import os

app = Flask(__name__)

# Set character limits for input fields to ensure data fits well in the LaTeX template
CHARACTER_LIMITS = {
    'name': 50,
    'email': 100,
    'education': 500,
    'experience': 1000,
    'skills': 300,
    'projects': 1000,
    'technical_skills': 300,
}

# Create a function to validate input data based on character limits
def validate_input(data):
    for field, limit in CHARACTER_LIMITS.items():
        if len(data.get(field, '')) > limit:
            return False, f"{field} exceeds character limit of {limit}"
    return True, None

# Route to render the input form
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle form submissions
@app.route('/generate', methods=['POST'])
def generate():
    # Get form data from the request
    data = request.form

    # Validate the input data
    is_valid, error_message = validate_input(data)
    if not is_valid:
        return jsonify({'error': error_message}), 400

    # Define LaTeX template content with placeholders for user inputs
latex_template = r'''
\documentclass[letterpaper,11pt]{article}
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small#2} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

\begin{document}

%----------HEADING----------
\begin{center}
    \textbf{\Huge \scshape {{ name }}} \\ \vspace{1pt}
    \small {{ phone }} $|$ \href{mailto:{{ email }}}{\underline{{ email }}} $|$ 
    \href{{ {{ linkedin }} }}{\underline{{ linkedin }}} $|$
    \href{{ {{ github }} }}{\underline{{ github }}}
\end{center}

%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {{ university }}{{ edu_dates }}
      {{ degree }}{GPA: {{ gpa }}}
      \resumeItemListStart
        \resumeItem{{ education_item1 }}
        \resumeItem{{ education_item2 }}
        \resumeItem{{ education_item3 }}
      \resumeItemListEnd
  \resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\section{Experience}
  \resumeSubHeadingListStart
    \resumeSubheading
      {{ role1_title }}{{ role1_dates }}
      {{ role1_company }}{{ role1_location }}
      \resumeItemListStart
        \resumeItem{{ role1_description1 }}
        \resumeItem{{ role1_description2 }}
        \resumeItem{{ role1_description3 }}
      \resumeItemListEnd
  \resumeSubHeadingListEnd

%-----------PROJECTS-----------
\section{Projects}
  \resumeSubHeadingListStart
    \resumeProjectHeading
      {\textbf{{ project1_title }} $|$ \emph{{ project1_technologies }}}{ {{ project1_dates }} }
      \resumeItemListStart
        \resumeItem{{ project1_description1 }}
        \resumeItem{{ project1_description2 }}
      \resumeItemListEnd
    \resumeProjectHeading
      {\textbf{{ project2_title }} $|$ \emph{{ project2_technologies }}}{ {{ project2_dates }} }
      \resumeItemListStart
        \resumeItem{{ project2_description1 }}
        \resumeItem{{ project2_description2 }}
      \resumeItemListEnd
  \resumeSubHeadingListEnd

%-----------TECHNICAL SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: {{ technical_skills }}}
    }}
 \end{itemize}

\end{document}
'''

 # Render the LaTeX template with user inputs
template = Template(latex_template)
endered_tex = template.render(
        name=data['name'],
        email=data['email'],
        phone=data['phone'],
        linkedin=data['linkedin'],
        github=data['github'],
        university=data['university'],
        edu_dates=data['edu_dates'],
        degree=data['degree'],
        gpa=data['gpa'],
        education_item1=data['education_item1'],
        education_item2=data['education_item2'],
        education_item3=data['education_item3'],
        role1_title=data['role1_title'],
        role1_dates=data['role1_dates'],
        role1_company=data['role1_company'],
        role1_location=data['role1_location'],
        role1_description1=data['role1_description1'],
        role1_description2=data['role1_description2'],
        role1_description3=data['role1_description3'],
        project1_title=data['project1_title'],
        project1_technologies=data['project1_technologies'],
        project1_dates=data['project1_dates'],
        project1_description1=data['project1_description1'],
        project1_description2=data['project1_description2'],
        project2_title=data['project2_title'],
        project2_technologies=data['project2_technologies'],
        project2_dates=data['project2_dates'],
        project2_description1=data['project2_description1'],
        project2_description2=data['project2_description2'],
        technical_skills=data['technical_skills']
    )

    # Write the rendered LaTeX to a file
tex_file = 'output.tex'
with open(tex_file, 'w') as f:
        f.write(rendered_tex)

    # Compile the LaTeX file into a PDF using MiKTeX
subprocess.call(['pdflatex', tex_file])

    # Serve the generated PDF back to the user
return send_file('output.pdf', as_attachment=True)