var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema(
    {
        content:{
            type:String,
            required: true,
            minlength: 2,
        },
        upvote:{
            type:Number,
            min:0,
            default: 0
        },
        downvote:{
            type:Number,
            min:0,
            default: 0
        },
        user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        topic:{type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Post', PostSchema);
