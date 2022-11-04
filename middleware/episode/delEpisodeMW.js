/**
 * Deletes an episode determined by :episodeid
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    return function (req, res) {
        console.log(`delEpisodeMW: ${req.params.showid} ${req.params.episodeid}`);
        if (typeof res.locals.episode === 'undefined') {
            return next();
        }
        res.redirect(`/show/` + res.locals.show._id);
    }
}