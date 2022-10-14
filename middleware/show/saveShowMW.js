/**
 * Saves show after creation or updating
 * After succesful db writing redirects to index
 * @param {*} objects input params
 * @returns template function
 */
module.exports = function(objects) {
    return function (req, res, next) {
        console.log('saveShowMW');
        next();
    }
}