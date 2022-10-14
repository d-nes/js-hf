/**
 * Gets an episode determined by :episodeid
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    return function (req, res, next) {
        console.log(`getEpisodeMW: ${req.params.showid} ${req.params.episodeid}`);
        next();
    }
}