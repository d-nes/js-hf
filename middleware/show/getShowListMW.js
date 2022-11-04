/**
 * Gets a list of stored shows
 * @param {*} objects 
 * @returns 
 */
module.exports = function(objects) {
    return function (req, res, next) {
        console.log('getShowListMW');
        res.locals.showlist = [{
            _id: 'showtitle1',
            title: 'ShowTitle',
            description: 'Very long description.'
        }, 
        {
            _id: 'showtitle2',
            title: 'ShowTitle',
            description: 'Very long description.'
        }
        ];
        
        return next();
    }
}