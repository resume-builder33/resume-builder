# Resume-Builder

## Table of Contents

- [Description](#description)
- [Required Packages](#required-packages)
- [How to Run](#how-to-run)
- [TeX Live Installation](#tex-live-installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

Resume-Builder is a web application that allows users to input their resume details and generate a professional resume in PDF format. The application is built using React for the frontend and Flask for the backend.

## Required Packages

### Frontend

- React
- Tailwind CSS
- Axios
- Vite
- TypeScript
- ESLint

### Backend

- Flask
- Jinja2

### TeX Live

- Required for generating PDF files.

## How to Run

### Frontend

1. Navigate to the project directory and install the required packages:

    ```bash
    npm install
    ```

2. Start the frontend server:

    ```bash
    npm run dev
    ```

   This will start the Vite development server.

3. To build the frontend for production:

    ```bash
    npm run build
    ```

4. To preview the production build:

    ```bash
    npm run preview
    ```

### Backend

1. Navigate to the backend directory and create a virtual environment:

    ```bash
    python -m venv venv
    ```

2. Activate the virtual environment:

    - On Windows:

        ```bash
        venv\Scripts\activate
        ```

    - On macOS/Linux:

        ```bash
        source venv/bin/activate
        ```

3. Install the required packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Start the backend server:

    ```bash
    flask run
    ```

## TeX Live Installation

TeX Live is required for generating PDF files. Follow the instructions below to install TeX Live on your system:

### Linux

To install TeX Live on a Linux system, run:

```bash
sudo apt-get update
sudo apt-get install texlive
```

### macOS

To install TeX Live on macOS, you can use Homebrew:

```bash
brew install --cask mactex
```

### Windows

To install TeX Live on Windows:

1. Download the TeX Live installer from [the TeX Live website](https://www.tug.org/texlive/)
2. Run the installer and follow the installation instructions provided.

### Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Fill in the resume details in the form.
3. Click the "Generate Resume" button to generate and download the PDF.

## Credits

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Flask](https://flask.palletsprojects.com/)
- [Jinja2](https://jinja.palletsprojects.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.