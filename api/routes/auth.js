var express = require('express');
var router = express.Router();
const passport = require('passport');
var Instagram = require('passport-instagram');
const InstagramStrategy = Instagram.Strategy;

passport.use(new InstagramStrategy({
    clientID: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    callbackURL: "YOUR_CALL_BACK_URL" 
  }, (accessToken, refreshToken, profile, done) => {

    User.findOne({ 'instagram.id': profile.id }, function(err, user) {
        if (err) return callback(err);if (user) {
            return done(null, user); // Check if user already exists
        }
            
        const {
            id,
            full_name,
            username,
            bio,
            website,
            counts: { follows, followed_by }
        } = profile._json.data;

        const new_user = new User({ 
            instagram: {
            id,
            accessToken,
            full_name,
            username,
            bio,
            website,
            counts: {
                follows,
                followed_by
            }
            }
        });

        new_user.save(function(err, user) { //saving a new user into mongo
            if (err) {
            throw err;
            }
            return done(null, user);
        });

    })
    })
)


router.get('/', passport.authenticate('instagram'));
router.get('/callback', passport.authenticate('instagram', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    })
  );

module.exports = router;