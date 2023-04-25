const { crawlPage } = require('./crawl.js');
const { printReport, writeReportToFile } = require('./report.js');

/**
 * The main function for crawling a website and generating a report of all unique pages within the domain.
 * 
 * @returns {Promise<void>}
 */
async function main () {
    if (process.argv.length < 3) {
        console.log('no website provided')
        process.exit(1)
    }
    if (process.argv.length > 3) {
        console.log('to many command line args')
        process.exit(1)
    }

    // Can access the structure of process.arg array
    // first and second element are not command line arg
    // for(const arg of process.argv) {
    //     console.log(arg)
    // }

    const baseURL = process.argv[2];

    console.log(`starting crawl of ${baseURL}`)
    const pages = await crawlPage(baseURL, baseURL, {});

    printReport(pages)
    writeReportToFile(pages, 'report.csv')

}

main()