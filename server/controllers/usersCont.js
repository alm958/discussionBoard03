var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    regLogUser: function(req, res){
        console.log('here we are');
        console.log(req.body.name);
        User.findOne({'name':req.body.name})
            .then(function(foundUser){
                if (foundUser == null){
                console.log(`user ${req.body.name} not found. Adding new user...`);
                User.create(req.body)
                    .then(function(addedUser){
                        console.log(`${addedUser} added.`);
                        res.json(addedUser);
                    })
                    .catch(function(err){
                            console.log(err);
                            res.json(err);
                    })
                } else {
                    console.log(`${foundUser} found.`);
                    res.json(foundUser);
                }
            })
            .catch(function(err){
                    console.log(err);
                    res.json(err);
            })
    },
    getOneById: function(req, res){
        User.find({})
            .then(function(users){
                res.json(users);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    updateTopicCount: function(req, res){
        console.log("in update");
        console.log(req.params.id);
        console.log(req.body);
        User.findByIdAndUpdate({_id: req.params.id}, {$inc:{topiccount:1}}, { new: true})
            .then(function(updatedUser){
                console.log('back from mongoose topic count increment');
                console.log(updatedUser);
                res.json(updatedUser);
            })
            .catch(function(err){
                console.log('in mongoose topic count increment catch statment');
                console.log(err);
                res.json(err);
            });
    },
    updatePostCount: function(req, res){
        console.log("in update");
        console.log(req.params.id);
        console.log(req.body);
        User.findByIdAndUpdate({_id: req.params.id}, {$inc:{postcount:1}}, { new: true})
            .then(function(updatedUser){
                console.log('back from mongoose post count increment');
                console.log(updatedUser);
                res.json(updatedUser);
            })
            .catch(function(err){
                console.log('in mongoose post count increment catch statment');
                console.log(err);
                res.json(err);
            });
    },
    updateCommentCount: function(req, res){
        console.log("in update");
        console.log(req.params.id);
        console.log(req.body);
        User.findByIdAndUpdate({_id: req.params.id}, {$inc:{commentcount:1}}, { new: true})
            .then(function(updatedUser){
                console.log('back from mongoose comment count increment');
                console.log(updatedUser);
                res.json(updatedUser);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }

}
