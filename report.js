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
    printReport
}