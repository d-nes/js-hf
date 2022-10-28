/**
 * Render the page named in 'viewName' parameter
 * @param {*} viewName page name
 * @param {*} path root directory
 * @param {*} objects
 * @returns template function
 */
module.exports = function (viewName, path, objects) {
    const objects_ = objects;
    return function (req, res) {
        console.log(`Render: ${viewName} ${req.params.showid} ${req.params.episodeid}`);
        //res.sendFile(path.join(__dirname, `../source/${viewName}.html`));
        res.render(path.join(__dirname, `../views/pages/${viewName}.ejs`), {
            objects_: objects
        }) 
    }
}
