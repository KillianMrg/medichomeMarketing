const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    id: String,
    ig_id: String,
    username: String,
    titleMarketing: String,
    caption: String,
    comments_count: String,
    like_count: String

})



exports.module = mongoose.model('Post', postSchema);