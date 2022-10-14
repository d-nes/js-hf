/**
 * Deletes an episode determined by :episodeid
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    return function (req, res) {
        console.log(`delEpisodeMW: ${req.params.showid} ${req.params.episodeid}`);
        res.redirect(`/show/${req.params.showid}`);
    }
}