const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    id: { type: String },               // insta
    ig_id: { type: String },            // insta
    username: { type: String },         // insta
    caption: { type: String },          // insta & sauvegarde
    comments_count: { type: String },   // insta
    like_count: { type: String },       // insta
    timestamp: { type: String },        // insta
    media_type: { type: String },       // insta
    media_url: { type: String }         // insta

})


const Post = mongoose.model('Post', postSchema);
module.exports = Post;