/**
 * Gets an episode determined by :episodeid
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    const EpisodeModel = objects.episodeModel;

    return function (req, res, next) {
        console.log(`getEpisodeMW: ${req.params.showid} ${req.params.episodeid}`);
        
        EpisodeModel.findOne( { _id: req.params.episodeid },
            (err, episode) => {
                if (err || !episode) {
                    return next(err);
                }

                res.locals.episode = episode;
                return next();
            }
        )
    }
}