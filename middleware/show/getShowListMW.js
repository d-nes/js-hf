/**
 * Gets a list of stored shows
 * @param {*} objects 
 * @returns template function
 */
module.exports = function(objects) {
    return function (req, res, next) {
        console.log('getShowListMW');
        next();
    }
}