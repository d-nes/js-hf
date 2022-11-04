/**
 * Gets a show determined by :showid
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    return function (req, res, next) {
        console.log(`getShowMW: ${req.params.showid}`);
        res.locals.show = {
            _id: 'showtitle',
            title: 'ShowTitle',
            description: 'Very long description.'
        };
        return next();
    }
}