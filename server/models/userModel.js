var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique: true,
            required:true,
            minlength:2,
            trim: true
        },
        topiccount:{
            type:Number,
            min:0,
            default: 0
        },
        postcount:{
            type:Number,
            min:0,
            default: 0
        },
        commentcount:{
            type:Number,
            min:0,
            default: 0
        },
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('User', UserSchema);
