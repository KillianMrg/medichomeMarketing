const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    impressions:  { type: String },
    reach:  { type: String },
    emailContacts:  { type: String },
    phoneCallClicks:  { type: String },
    textMessageClicks:  { type: String },
    directionsClicks:  { type: String },
    websiteClicks:  { type: String },
    profileViews:  { type: String },
    followersCount:  { type: String },
    followsCount:  { type: String },
    mediaCount:  { type: String }
      

})



const User = mongoose.model('User', userSchema);
module.exports = User;
