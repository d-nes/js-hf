/**
 * Render the page named in 'viewName' parameter
 * @param {*} viewName page name
 * @param {*} path root directory
 * @param {*} objects
 * @returns template function
 */
module.exports = function (viewName, path, objects) {
    return function (req, res) {
        console.log(`Render: ${viewName} ${req.params.showid} ${req.params.episodeid}`);
        console.log(objects);
        res.render(path.join(__dirname, `../views/pages/${viewName}.ejs`), res.locals);
    }
}
