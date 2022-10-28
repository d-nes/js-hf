/**
 * Gets a list of stored shows
 * @param {*} objects 
 * @returns 
 */
module.exports = function(objects) {
    return function (req, res, next) {
        const shows = ['Friends', 'Rings of Power'];
        console.log('getShowListMW');
        objects = shows;
        next();
    }
}