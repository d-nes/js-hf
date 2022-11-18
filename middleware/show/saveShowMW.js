/**
 * Saves show after creation or updating
 * After succesful db writing redirects to showpage
 * @param {*} objects 
 * @returns 
 */

module.exports = function(objects) {
    const ShowModel = objects.showModel
   //const ShowModel = objects["showModel"];

    return function (req, res, next) {
        console.log('saveShowMW');
       
        if(
            typeof req.body.title === 'undefined' ||
            typeof req.body.description === 'undefined'
        ) { return next(); }

        if (typeof res.locals.show === 'undefined') {
            res.locals.show = new ShowModel();
        }

        res.locals.show.title = req.body.title;
        res.locals.show.description = req.body.description;

        res.locals.show.save(err => {
            if(err) {
                return next(err);
            }

            return res.redirect('/');
        });
    }
}