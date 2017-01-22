var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true, 
        },
        description:{
            type:String,
            required: true,
            minlength : 7
        },
        posts:{
            type:Number,
            min:0,
            default: 0
        },
        category: {
            type: String,
            enum: ['biscuits', 'tea-cozies', 'AI', 'numerology', 'SQL', 'non-relational DBs']
        },
        user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Topic', TopicSchema);
