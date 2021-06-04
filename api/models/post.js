const mongoose = require('mongoose');

const postSchema   = mongoose.Schema({
    id: {
        type    : int,
        trim    : true,
    },
    ig_id: {
        type    : int,
        trim    : true,
    },
    username:{
        type: String,
        trim: true
    },
    titleMarketing: {
        type: String,
        trim: true
    },
    caption:{
        type: String,
        trim: true
    },
    comments_count: {
        type    : int,
        trim    : true,
    },
    like_count: {
        type    : int,
        trim    : true,
    }
}, {
    timestamps: true // ajoute 2 champs au document createdAt et updatedAt
});

module.exports = mongoose.model('Post', postSchema);