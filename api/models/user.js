const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    followersCount: { type: String },
    profileViews:  { type: String },
    followersOnline:  { type: String },
    impressions:  { type: String },
    reach:  { type: String },
    emailContacts:  { type: String },
    directionsClicks:  { type: String },
    phoneCallClicks:  { type: String },
    textMessageClicks:  { type: String },
    websiteClicks:  { type: String },
    audienceGender:  { type: String },
    audienceAge:  { type: String },
    audienceCountry:  { type: String },
    audienceLocale:  { type: String },
    audienceCity:  { type: String },       

})



exports.module = mongoose.model('User', userSchema);
