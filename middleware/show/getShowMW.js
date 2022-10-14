/**
 * Gets a show determined by an id parameter
 * @param {*} objects 
 * @returns template function
 */
 module.exports = function(objects) {
    return function (req, res, next) {
        console.log('getShowMW');
        next();
    }
}