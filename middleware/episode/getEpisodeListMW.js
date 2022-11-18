/**
 * Gets a list of stored episodes
 * @param {*} objects 
 * @returns 
 */
module.exports = function (objects) {
    const EpisodeModel = objects.episodeModel;

    return function (req, res, next) {
        console.log(`getEpisodeListMW: ${req.params.showid}`);

        if (typeof res.locals.show === 'undefined') {
            return next();
        }

        EpisodeModel.find({ _show: req.params.showid }, (err, episodelist) => {
            if(err) {
                return next(err);
            }

            res.locals.episodelist = episodelist;
            return next();
        });
    }
}