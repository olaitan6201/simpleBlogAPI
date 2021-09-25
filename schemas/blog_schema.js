const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const Blog = module.exports = mongoose.model('Blog', BlogSchema);