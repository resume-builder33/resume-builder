import subprocess
import tempfile
import os

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