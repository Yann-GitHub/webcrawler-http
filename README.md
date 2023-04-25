# Webcrawler HTTP

The Webcrawler-http is a command line application that uses Node.js to crawl a website and generate a report of the internal linking structure of the website. The report provides information about which pages link to which other pages on the site. This tool is useful for web marketers or SEO search engine optimization experts.

## Installation
To use the webcrawler-http application, you must have Node.js installed on your computer. If you don't have Node.js installed, you can download it from the official website.

Once Node.js is installed, follow these steps:

1. Clone the repository or download the ZIP file and extract it to a directory of your choice.
2. Open the terminal or command prompt and navigate to the directory where you extracted the files.
3. Run npm install to install the required dependencies.

### .nvmrc File

A file named .nvmrc has been added to the project to specify the version of Node.js that should be used to run the application. This is useful because different projects may require different versions of Node.js, and having an .nvmrc file ensures that everyone working on the project is using the same version.

The contents of the .nvmrc file specify the desired version of Node.js, for example:

```bash
18.15.0
```
To use the specified version of Node.js, you can install nvm (Node Version Manager) and run the following command in the project directory:

```bash
nvm use
```
This will use the version of Node.js specified in the .nvmrc file. If that version is not installed, nvm will prompt you to install it.

Note that if you don't have nvm installed, you can still use the application with the version of Node.js you have installed on your computer. However, using the specified version in the .nvmrc file is recommended for consistency and to avoid potential issues caused by version differences.

### JSDOM library

The webcrawler-http application uses the JSDOM library to parse HTML and manipulate the resulting DOM. JSDOM is a JavaScript implementation of the W3C DOM standards that runs in Node.js. It allows you to write JavaScript code that manipulates HTML documents as if they were being rendered in a web browser.

If you're not familiar with JSDOM, you can find more information in the [official documentation](https://github.com/jsdom/jsdom).

## Usage
To run the `webcrawler-http` application, open the terminal or command prompt and navigate to the directory where you extracted the files. Then, run the following command:

```bash
node index.js <url>
```

Replace `<url>` with the URL of the website you want to crawl. For example:

```bash
node index.js https://www.example.com
```

The application will start crawling the website and generate a report of the internal linking structure of the website. The report will be saved in a file named `report.txt` in the same directory where the application is located, and also printed in the terminal.