/**
 * Marks given episode (:showid + :episodeid) seen
 * Changes next episode to next unseen
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    return function (req, res) {
        console.log(`markEpisodeMW: ${req.params.showid} ${req.params.episodeid}`);
        res.redirect('/');
    }
}