/**
 * Gets a list of stored shows
 * @param {*} objects 
 * @returns 
 */
module.exports = function(objects) {
    return function (req, res, next) {
        console.log('getShowListMW');
        res.locals.showlist = [{
            _id: 'friends',
            title: 'ShowTitle',
            description: 'Very long description.'
        }, 
        {
            _id: 'showtitle2',
            title: 'ShowTitle2',
            description: 'Very long description.'
        }
        ];
        
        return next();
    }
}