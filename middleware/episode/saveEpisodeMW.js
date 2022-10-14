/**
 * Saves episode after creation or updating
 * After succesful db writing redirects to showpage
 * @param {*} objects input params
 * @returns template function
 */
module.exports = function(objects) {
    return function (req, res, next) {
        console.log('saveEpisodeMW');
        next();
    }
}