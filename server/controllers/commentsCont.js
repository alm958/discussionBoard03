var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = {
    create: function(req, res){
        Comment.create(req.body)
            .then(function(comment){
                console.log(comment);
                res.json(comment);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    index: function(req, res){
        Comment.find({'post': req.params.Tid}).populate('user', 'name')
            .then(function(comments){
                res.json(comments);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }

}
