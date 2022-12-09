/**
 * Gets a list of stored shows
 * @param {*} objects 
 * @returns 
 */
module.exports = function(objects) {
    const ShowModel = objects.showModel;
    const EpisodeModel = objects.episodeModel;
    
    
    return function (req, res, next) {
        console.log('getShowListMW');
        
        ShowModel.find({}, (err, showlist) => {
            if(err) {
                return next(err);
            }
            
            let _showlist = [];
            res.locals.showlist = [];

            if(showlist.length <= 0) 
                return next();
           
            showlist.forEach((show, index) => {
                EpisodeModel.find({ _show: show._id }, (err, episodelist) => {    
                    if(err) {
                        return next(err);
                    }
                    
                    let run = true;
                    episodelist.forEach(episode => {
                        if(!episode.seen && run){
                            show.next = "S" + episode.season + "E" + episode.episode + " - " + episode.title;
                            show._next = episode._id;
                            run = false;
                        }
                    });

                    _showlist.push(show);
                    res.locals.showlist = _showlist;

                    if(index === showlist.length - 1)
                        return next();
                })
            });
        });
    }
}