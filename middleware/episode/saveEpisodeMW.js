/**
 * Saves episode after creation or updating
 * After succesful db writing redirects to showpage
 * @param {*} objects 
 * @returns 
 */
module.exports = function(objects) {
    const EpisodeModel = objects.episodeModel;

    return function (req, res, next) {
        console.log(`saveEpisodeMW: ${req.params.showid}`);
        
        if (
            typeof req.body.title === 'undefined' ||
            typeof req.body.season === 'undefined' ||
            typeof req.body.episode === 'undefined' ||
            //typeof req.body.seen === 'undefined' ||
            typeof res.locals.show === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.episode === 'undefined') {
            res.locals.episode = new EpisodeModel();
        }

        res.locals.episode.title = req.body.title;
        res.locals.episode.season = req.body.season;
        res.locals.episode.episode = req.body.episode;
        res.locals.episode.seen = req.body.seen;
        res.locals.episode._show = res.locals.show._id;

        res.locals.episode.save(err => {
            if(err) {
                return next(err);
            }

            return res.redirect('/show/' + res.locals.show._id);
        });
    }
}