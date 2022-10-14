/**
 * Render the page named in parameter
 * @param {*} viewName page name
 * @param {*} path root directory
 * @returns template function
 */
module.exports = function (viewName, path, objects) {
    return function (req, res) {
        console.log(`Render: ${viewName}`);
        res.sendFile(path.join(__dirname, `../source/${viewName}.html`));
    }
}
