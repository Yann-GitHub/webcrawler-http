# Webcrawler HTTP

The Webcrawler-http is a command line application that uses Node.js to crawl a website and generate a report of the internal linking structure of the website. The report provides information about which pages link to which other pages on the site. This tool is useful for web marketers or SEO search engine optimization experts.

## Installation
To use the webcrawler-http application, you must have Node.js installed on your computer. If you don't have Node.js installed, you can download it from the official website.

Once Node.js is installed, follow these steps:

1. Clone the repository or download the ZIP file and extract it to a directory of your choice.
2. Open the terminal or command prompt and navigate to the directory where you extracted the files.
3. Run npm install to install the required dependencies.

## Usage
To run the `webcrawler-http` application, open the terminal or command prompt and navigate to the directory where you extracted the files. Then, run the following command:

```bash
node index.js <url>
```

Replace `<url>` with the URL of the website you want to crawl. For example:

```bash
node index.js https://www.example.com
```

The application will start crawling the website and generate a report of the internal linking structure of the website. The report will be saved in a file named `report.txt` in the same directory where the application is located.