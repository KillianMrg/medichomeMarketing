const express = require("express");
const passport = require('passport');





var Instagram = require('passport-instagram');
const InstagramStrategy = Instagram.Strategy;
var User = require('../models/User');

passport.use(new InstagramStrategy({
    clientID: "522060562311602",
    clientSecret: "6369a213ff1f0e292a2faee81f7b8262",
    callbackURL: "http://localhost:8081/api" 
    }, 
    (accessToken, refreshToken, profile, done) => {
    User.findOne({ 'instagram.id': profile.id }, function(err, user) {
        if (err) return callback(err);
        if (user) {
        return done(null, user); // Check if user already exists
        }

    const {
        id,
        full_name,
        username
        } = profile._json.data;
        
    const new_user = new User({ 
        instagram: {
            id,
            accessToken,
            full_name,
            username
        }
        });
        
    new_user.save(function(err, user) { //saving a new user into mongo
        if (err) {
            throw err;
        }
        return done(null, user);
        });
    });
    }))



const router = express.Router();

router.get("/", passport.authenticate('instagram'));
router.get('/callback',
    passport.authenticate('instagram', {
      successRedirect: '/api',
      failureRedirect: '/'
    })
  );

module.exports = router;