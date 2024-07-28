import subprocess
import tempfile
import os


# # Import necessary modules
# from flask import Flask, request, render_template, send_file, jsonify
# from jinja2 import Template
# import subprocess
# import os

# app = Flask(__name__)

# #Set character limits for input fields to ensure data fits well in the LaTeX template
# CHARACTER_LIMITS = {
#     'name': 50,
#     'email': 100,
#     'education': 500,
#     'experience': 1000,
#     'skills': 300,
#     'projects': 1000,
#     'technical_skills': 300,
# }

# # Create a function to validate input data based on character limits
# def validate_input(data):
#     for field, limit in CHARACTER_LIMITS.items():
#         if len(data.get(field, '')) > limit:
#             return False, f"{field} exceeds character limit of {limit}"
#     return True, None

# # Route to render the input form
# @app.route('/')
# def index():
#     return render_template('index.html')


latex_template = r'''
%-------------------------
% Resume in Latex
% Author : Sidratul Muntaha Ahmed
% License : MIT
%------------------------

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
\usepackage{underscore}


%----------FONT OPTIONS----------
% sans-serif
% \usepackage[sfdefault]{FiraSans}
% \usepackage[sfdefault]{roboto}
% \usepackage[sfdefault]{noto-sans}
% \usepackage[default]{sourcesanspro}

% serif
% \usepackage{CormorantGaramond}
% \usepackage{charter}


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
      \textit{\small#1} & \textit{\small #2} \\
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
    \textbf{\Huge \scshape {name}} \\ \vspace{1pt}
    \small {phone} $|$ \href{mailto:{email}}{\underline{{email}}} $|$ 
    \href{{linkedin}}{\underline{{linkedin}}} $|$
    \href{{github}}{\underline{{github}}}
\end{center}

%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {{university}}{{edu_dates}}
      {{Degree}}{{GPA: gpa}}
      \resumeItemListStart
        \resumeItem{{education_item1}}
        \resumeItem{{education_item2}}
        \resumeItem{{education_item3}}
      \resumeItemListEnd
  \resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\section{Experience}
  \resumeSubHeadingListStart
    \resumeSubheading
      {{role1_title}}{{role1_dates}}
      {{role1_company}}{{role1_location}}
      \resumeItemListStart
        \resumeItem{{role1_description1}}
        \resumeItem{{role1_description2}}
        \resumeItem{{role1_description3}}
      \resumeItemListEnd
  \resumeSubHeadingListEnd


%-----------PROJECTS-----------
\section{Projects}
  \resumeSubHeadingListStart
    \resumeProjectHeading
      {\textbf{{project1_title}} $|$ \emph{{project1_technologies}}}{{project1_dates}}
      \resumeItemListStart
        \resumeItem{{project1_description1}}
        \resumeItem{{project1_description2}}
      \resumeItemListEnd
    \resumeProjectHeading
      {\textbf{{project2_title}} $|$ \emph{{project2_technologies}}}{{project2_dates}}
      \resumeItemListStart
        \resumeItem{{project2_description1}}
        \resumeItem{{project2_description2}}
      \resumeItemListEnd
  \resumeSubHeadingListEnd


%-----------TECHNICAL SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: {technical_skills}}
    }}
 \end{itemize}


%-------------------------------------------
\end{document}
'''




# Define the function to render the template with the given data
def render_latex_template(template, data):
    for key, value in data.items():
        placeholder = "{" + key + "}"
        template = template.replace(placeholder, value)
    return template

# Example data dictionary
data = {
    'name': 'John Doe',
    'email': 'johndoe@example.com',
    'phone': '123-456-7890',
    'linkedin': 'https://linkedin.com/in/johndoe',
    'github': 'https://github.com/johndoe',
    'university': 'University of Example',
    'edu_dates': 'Aug 2015 - May 2019',
    'degree': 'Bachelor of Science in Computer Science',
    'gpa': '3.8/4.0',
    'education_item1': 'Relevant coursework: Algorithms, Data Structures',
    'education_item2': 'Dean\'s List: Fall 2015, Spring 2017',
    'education_item3': 'Graduated with Honors',
    'role1_title': 'Software Engineer',
    'role1_dates': 'Jun 2019 - Present',
    'role1_company': 'Example Corp',
    'role1_location': 'Example City, EX',
    'role1_description1': 'Developed and maintained web applications.',
    'role1_description2': 'Collaborated with cross-functional teams.',
    'role1_description3': 'Implemented RESTful APIs.',
    'project1_title': 'Project Alpha',
    'project1_technologies': 'Python, Flask, PostgreSQL',
    'project1_dates': 'Jan 2020 - Dec 2020',
    'project1_description1': 'Led the development of a web application.',
    'project1_description2': 'Integrated third-party services.',
    'project2_title': 'Project Beta',
    'project2_technologies': 'Java, Spring Boot, MySQL',
    'project2_dates': 'Jan 2021 - Present',
    'project2_description1': 'Designed and implemented microservices.',
    'project2_description2': 'Optimized database performance.',
    'technical_skills': 'Python, Java, SQL, Git, Docker'
}

# Render the LaTeX template with the provided data
rendered_latex = render_latex_template(latex_template, data)


print(rendered_latex)



def latex_to_pdf(latex_file):
    with tempfile.TemporaryDirectory() as tmpdir:
        # Copy the LaTeX file to the temporary directory
        base_name = os.path.basename(latex_file)
        tmp_latex_file = os.path.join(tmpdir, base_name)
        with open(latex_file, 'r') as src, open(tmp_latex_file, 'w') as dst:
            dst.write(src.read())
        
        # Call pdflatex in the temporary directory
        process = subprocess.run(['pdflatex', tmp_latex_file], cwd=tmpdir, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        
        # Get the path to the generated PDF
        pdf_file = tmp_latex_file.replace('.tex', '.pdf')
        
        # Move the PDF to the current working directory
        output_pdf = os.path.join(os.getcwd(), base_name.replace('.tex', '.pdf'))
        os.rename(pdf_file, output_pdf)
        
        return output_pdf, process.stdout, process.stderr

