/**
 * Gets a list of stored episodes
 * @param {*} objects 
 * @returns template function
 */
 module.exports = function(objects) {
    return function (req, res, next) {
        console.log('getEpisodeListMW');
        next();
    }
}