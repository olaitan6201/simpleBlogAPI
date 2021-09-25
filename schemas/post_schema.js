const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    blog_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    ref: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const Post = module.exports = mongoose.model('Post', PostSchema);