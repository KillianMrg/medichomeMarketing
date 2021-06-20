const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
    mediaId: {type : String},
    id: { type: String },
    text: { type: String },
    username: { type: String },
    timestamp: { type: String },
    like_count: { type: String },

})


const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;