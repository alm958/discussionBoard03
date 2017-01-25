var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = {
    create: function(req, res){
        Topic.create(req.body)
            .then(function(topic){
                console.log(topic);
                res.json(topic);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    index: function(req, res){
        Topic.find({}).populate('user', 'name')
            .then(function(topics){
                console.log(topics);
                res.json(topics);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    getOneById: function(req, res){
        Topic.findById(req.params.id).populate('user', 'name')
            .then(function(topic){
                res.json(topic);
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
        Topic.findByIdAndUpdate(req.params.id, req.body, { new: true})
            .then(function(updatedTopic){
                console.log(updatedTopic);
                res.json(updatedTopic);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }


}
