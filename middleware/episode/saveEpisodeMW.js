/**
 * Saves episode after creation or updating
 * After succesful db writing redirects to showpage
 * @param {*} objects 
 * @returns 
 */
module.exports = function(objects) {
    return function (req, res, next) {
        console.log(`saveEpisodeMW: ${req.params.showid}`);
        if ((typeof req.body.title === 'undefined') ||
            (typeof req.body.season === 'undefined') ||
            (typeof req.body.episode === 'undefined') ||
            (typeof req.body.seen === 'undefined') ||
            (typeof res.locals.show === 'undefined')) {
            return next();
        }

        return res.redirect('/show/' + res.locals.show._id);
    }
}