var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema(
    {
        content:{type:String},
        user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        post:{type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
        topic:{type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Comment', CommentSchema);
