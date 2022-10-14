/**
 * Saves show after creation or updating
 * After succesful db writing redirects to showpage
 * @param {*} objects 
 * @returns 
 */
module.exports = function(objects) {
    return function (req, res, next) {
        console.log('saveShowMW');
        next();
    }
}