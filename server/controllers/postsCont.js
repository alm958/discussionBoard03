var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = {
    create: function(req, res){
        Post.create(req.body)
            .then(function(post){
                console.log(post);
                res.json(post);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    index: function(req, res){
        Post.find({'topic':req.params.id}).populate('user', 'name')
            .then(function(posts){
                res.json(posts);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    update: function(req, res){
        console.log("in update");
        console.log(req.params.id);
        console.log(req.body);
        Post.findByIdAndUpdate(req.params.id, req.body, { new: true})
            .then(function(updatedPost){
                console.log(updatedPost);
                res.json(updatedPost);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    upvote: function(req, res){
        Post.findByIdAndUpdate({_id: req.params.id}, {$inc:{upvote:1}}, { new: true})
            .then(function(updatedPost){
                console.log(updatedPost);
                res.json(updatedPost);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    downvote: function(req, res){
        Post.findByIdAndUpdate({_id: req.params.id}, {$inc:{downvote:1}}, { new: true})
            .then(function(updatedPost){
                console.log(updatedPost);
                res.json(updatedPost);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }


}
