const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcryptjs');

const Post = new Schema({
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

// hook executé avant la sauvegarde d'un document. Hash le mot de passe quand il est modifié
User.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }

    this.password = bcrypt.hashSync(this.password, 10);

    next();
});

module.exports = mongoose.model('User', User);