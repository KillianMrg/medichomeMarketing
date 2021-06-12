const mongoose = require('mongoose');
const userSchema = mongoose.Schema({})



exports.module = mongoose.model('User', userSchema);