/**
 * Normalizes a URL by converting different variations of the same URL to a standard format.
 * 
 * @param {string} urlString - The input URL string to be normalized
 * @returns {string} - The normalized URL string.
 */

function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;

    if(hostPath.length && hostPath.slice(-1) === "/") {
        return hostPath.slice(0, -1)
    }
    return hostPath
}

module.exports = { normalizeURL }

// Alternatively, for ES6 module syntax:
// export default { normalizeURL }