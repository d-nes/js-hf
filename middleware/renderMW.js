const path = require('path');

module.exports = function (viewName) {
    return function (req, res) {
        console.log(`Render: ${viewName}`);
        res.sendFile(path.join(__dirname, `../source/${viewName}.html`));
    }
}
