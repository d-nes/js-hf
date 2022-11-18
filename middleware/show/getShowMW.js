/**
 * Gets a show determined by :showid
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    const ShowModel = objects.showModel;

    return function (req, res, next) {
        console.log(`getShowMW: ${req.params.showid}`);

        ShowModel.findOne({ _id: req.params.showid }, (err, show) => {
            if(err || !show) {
                return next(err);
            }

            res.locals.show = show;
            return next();
        });
    }
}