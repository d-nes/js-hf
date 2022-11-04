/**
 * Gets a list of stored episodes
 * @param {*} objects 
 * @returns 
 */
module.exports = function (objects) {
    return function (req, res, next) {
        console.log(`getEpisodeListMW: ${req.params.showid}`);
        res.locals.episodelist = [{
            _id: 'episode1',
            title: 'EpsiodeTitle',
            season: '01',
            episode: '01',
            seen: true
        },
        {
            _id: 'episode2',
            title: 'EpsiodeTitle',
            season: '01',
            episode: '02',
            seen: false
        }];
        return next();
    }
}