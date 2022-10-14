/**
 * Deletes a show determined by :showid
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    return function (req, res) {
        console.log(`delShowMW: ${req.params.showid}`);
        res.redirect('/');
    }
}