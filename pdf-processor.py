import subprocess

def latex_to_pdf(latex_file):
    # Call pdflatex to convert the LaTeX file to PDF
    process = subprocess.run(['pdflatex', latex_file], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return process.stdout, process.stderr