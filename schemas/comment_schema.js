const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    post_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const Comment = module.exports = mongoose.model('Comment', CommentSchema);