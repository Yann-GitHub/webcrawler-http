const { JSDOM } = require('jsdom');

async function crawlPage(currentURL) {
    console.log(`actively crawling: ${currentURL}`);

    try {
        const resp = await fetch(currentURL);
        if(resp.status > 399) {
            console.log(`error in fetch with status code: ${resp.status} on page ${currentURL}`)
            return
        }

        const contentType = resp.headers.get("content-type")
        if (!contentType.includes("text/html")) {
            console.log(`non html response, content type: ${contentType}, on page ${currentURL}`)
            return
        }

        console.log(await resp.text());
    } catch (err) {
        console.log(`error in fetch: ${err.message}, on page: ${currentURL}`)
    }

    
    
    
}


/**
 * Parses an HTML body and returns an array of URLs found in the anchor (a) tags.
 * 
 * @param {string} htmlBody - The HTML body containing the links.
 * @param {string} baseURL - The base URL to use for resolving relative URLs.
 * @returns {string[]} An array of URLs.
 */
function getURLsFromHTML(htmlBody, baseURL) {
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');
    for (const linkElement of linkElements) {
        if(linkElement.href.slice(0, 1) === '/') {
            // relative url
            try {
                const urlObj = new URL(`${baseURL}${linkElement.href}`);
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`error with relative url: ${err.message}`);
            }
            
        } else {
            // absolute url
            try {
                const urlObj = new URL(linkElement.href);
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`error with absolute url: ${err.message}`);
            }
        }
        
    }
    return urls;
}


/**
 * Normalizes a URL by converting different variations of the same URL to a standard format.
 * 
 * @param {string} urlString - The input URL string to be normalized
 * @returns {string} The normalized URL string.
 */
function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;

    if(hostPath.length && hostPath.slice(-1) === "/") {
        return hostPath.slice(0, -1)
    }
    return hostPath
}

// CommonJS syntaxe for import/export modules
module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}

// Alternatively, for ES6 module syntax:
// export default { normalizeURL }