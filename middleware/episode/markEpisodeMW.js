/**
 * Marks given episode (:showid + :episodeid) seen
 * @param {*} objects 
 * @returns 
 */
 module.exports = function(objects, checked) {
    return function (req, res) {
        console.log(`markEpisodeMW: ${req.params.showid} ${req.params.episodeid}`);
        
        res.locals.episode.seen = checked;
        
        res.locals.episode.save(err => {
            if(err) {
                return next(err);
            }

            if(req.params.next == "next")
                return res.redirect('/')    
            return res.redirect('/show/' + res.locals.show._id);
        });
    }
}