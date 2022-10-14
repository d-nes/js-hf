module.exports = function (viewName, path) {
    return function (req, res) {
        console.log(`Render: ${viewName}`);
        res.sendFile(path.join(__dirname, `../source/${viewName}.html`));
    }
}
