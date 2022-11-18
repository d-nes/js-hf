/**
 * Deletes a show determined by :showid
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    return function (req, res) {
        console.log(`delShowMW: ${req.params.showid}`);
        
        if (typeof res.locals.show === 'undefined') {
            return next();
        }
        
        res.locals.show.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    }
}