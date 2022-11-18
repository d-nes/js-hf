/**
 * Gets a list of stored shows
 * @param {*} objects 
 * @returns 
 */
module.exports = function(objects) {
    const ShowModel = objects.showModel;

    return function (req, res, next) {
        console.log('getShowListMW');
        
        ShowModel.find({}, (err, showlist) => {
            if(err) {
                return next(err);
            }

            res.locals.showlist = showlist;
            return next();
        });
    }
}