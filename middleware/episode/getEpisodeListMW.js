/**
 * Gets a list of stored episodes
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    return function (req, res, next) {
        console.log(`getEpisodeListMW: ${req.params.showid}`);
        next();
    }
}