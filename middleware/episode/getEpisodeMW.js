/**
 * Gets an episode determined by :episodeid
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects) {
    return function (req, res, next) {
        console.log(`getEpisodeMW: ${req.params.showid} ${req.params.episodeid}`);
        res.locals.episode = {
            _id: 'episode1',
            title: 'EpsiodeTitle',
            season: '01',
            episode: '01',
            seen: true
        };
        return next();
    }
}