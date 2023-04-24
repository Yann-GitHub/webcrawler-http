const { crawlPage } = require('./crawl.js');

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

    for (const page of Object.entries(pages)) {
        console.log(page)
    }

}

main()