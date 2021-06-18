const mongoose = require('mongoose');
const mailSchema = mongoose.Schema({
    
    like_count: { type: String }

})


const Mail = mongoose.model('Mail', mailSchema);
module.exports = Mail;