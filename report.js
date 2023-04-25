const fs = require('fs');
// The report is output to a CSV file using the 'fs' module to allow for easy analysis in a spreadsheet.
//  a built-in module in Node.js that provides functions for interacting with the file system.

/**
 * Write report data to a CSV file.
 *
 * @function writeReportToFile
 * @param {Object} report - The report data to write to file.
 * @param {string} filename - The name of the output CSV file.
 * @returns {void}
 */
function writeReportToFile(report, filename) {
  const rows = [];

  // Add header row
  rows.push(['Page URL', 'Number of Visits']);

  // Add data rows
  for (const [pageURL, numVisits] of Object.entries(report)) {
    rows.push([pageURL, numVisits]);
  }

  // Write CSV file
  const csv = rows.map(row => row.join(',')).join('\n');
  fs.writeFileSync(filename, csv);
}


/**
 * Prints a report of pages sorted by descending hit count.
 * 
 * @param {Object.<string, number>} pages - An object where the keys are URLs and the values are the hit counts.
 * @returns {void}
 */
function printReport(pages) {
    console.log("==========")
    console.log("START REPORT")
    console.log("==========")
    const sortedPages = sortPages(pages)

    for(const sortedPage of sortedPages) {
        const url = sortedPage[0];
        const hits = sortedPage[1];
        console.log(`Found ${hits} links to page: ${url}`)
    }

    console.log("==========")
    console.log("END REPORT")
    console.log("==========")
}

/**
 * Sorts pages by descending hit count.
 * 
 * @param {Object.<string, number>} pages - An object where the keys are URLs and the values are the hit counts.
 * @returns {Array.<Array.<string|number>>} - An array of arrays where each inner array represents a page and its hit count.
 */
function sortPages(pages) {
    const pagesArr = Object.entries(pages);
    pagesArr.sort((a, b) => {
        const aHits = a[1];
        const bHits = b[1];

        // return b[1] - a[1]
        return bHits - aHits
    })
    return pagesArr;
}

module.exports = {
    sortPages,
    printReport,
    writeReportToFile
}