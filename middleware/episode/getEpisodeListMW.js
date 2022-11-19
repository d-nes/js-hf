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

            episodelist.forEach(episode => {
                var run = true; //Sajnálom késő van és nem tudom hogy helyettesítsem a break-et
                if(episode.seen != true && run){
                    res.locals.show._next = episode._id;
                    run = false;
                }
            }); //Nem mintha működne

            res.locals.episodelist = episodelist;
            return next();
        });
    }
}