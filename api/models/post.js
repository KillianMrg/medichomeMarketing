const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    id: { type: String },
    ig_id: { type: String },
    username: { type: String },
    caption: { type: String },
    comments_count: { type: String },
    like_count: { type: String }

})


const Post = mongoose.model('Post', postSchema);
module.exports = Post;