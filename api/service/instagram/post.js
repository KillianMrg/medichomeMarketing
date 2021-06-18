const mongoose = require('mongoose')
const Post = require('../../models/post')
const User = require('../../models/user')
var FB = require('fb'),
    fbApp = new FB.Facebook();

fbApp.setAccessToken('EAADHiUjXdP8BAKt1yYSXsgYgNwygBZBVZA0SPOBYkZBZCEsUluspbto80IAOrdbjHrfLiPgDe2uCXk3auMEHHFChS0LMaMlQm3Q6ZAHQVSnJdq7OdqWM7d51Od21bGZBlcrijJ2LOpRNDknYbfmw28uxy7ah1ZBiWBxxIRoAVwefPH97IIKFgq3xMCZAcx0qWSrN2prefFg6ClTqWS88vSyg');

var instagramID= "17841447865985886";


registerOne = async (req,res) => {
    try{
        await Post.updateOne({ig_id: req.ig_id},
            {
                id: req.id,
                ig_id: req.ig_id, 
                username: req.username,
                caption: req.caption,
                comments_count: req.comments_count,
                like_count: req.like_count, 
                media_type: req.media_type,
                media_url: req.media_url,
                timestamp: req.timestamp
            },{
                upsert:true
            });
        console.log("Post " + req.id + " saved");
        
    }
    catch(err){
        console.log(err);
    }
}

registerPostById = async (req,res) => {
    try{
        await fbApp.api(req.id,
        'GET',
        {"fields":"id,ig_id,timestamp,comments_count,caption,like_count,media_type,media_url"},
        function (content) {
            this.registerOne(content)
        });
    }
    catch(err){
        console.log(err);
    }
}

exports.registerPosts = async (req,res) => {
    try{
        await fbApp.api('/17841447865985886/media',
        'GET',
        {},
        function (response) {
            console.log(response);
            response.data.forEach(function(element){
                this.registerPostById(element);
            })
        })
    }
    catch(err){
        console.log(err);
    }
}


exports.getAllPosts = async (req,res) => {

    try{
        console.log('getAll');
        await this.registerPosts();

        let result = await Post.find({});
        console.log(result);
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getPostById = async (req,res) => {
    console.log(req.body);

    try{

        this.registerPost();

        let result = await Post.find({id: req.id});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getPosts = async (req,res) => {

    try{

        this.registerPost();

        let result = await Post.find({ig_id: { $ne: null }});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getStats = async (req,res) => {
    try{
        console.log('User insights');

        await fbApp.api(
            '/17841447865985886',
            'GET',
            {"fields":"followers_count,follows_count,media_count"},
            function(response) {
                User.findByIdAndUpdate({id: instagramID},
                {
                    id: instagramID,
                    followersCount: response.followers_count,
                    followsCount: response.follows_count, 
                    mediaCount: response.media_count
                },{
                    upsert:true
                });
            }
        );

        await fbApp.api('/17841447865985886/insights',
        'GET',
        {"metric":"impressions, reach, email_contacts, phone_call_clicks, text_message_clicks, get_directions_clicks, website_clicks, profile_views","period":"day"},
        function (response) {
            User.findByIdAndUpdate({id: instagramID},
            {
                id: instagramID,
                impressions: response.data[0].values[0].value,
                reach: response.data[1].values[0].value, 
                emailContacts: response.data[2].values[0].value,
                phoneCallClicks: response.data[3].values[0].value,
                textMessageClicks: response.data[4].values[0].value,
                directionsClicks: response.data[5].values[0].value, 
                websiteClicks: response.data[6].values[0].value,
                profileViews: response.data[7].values[0].value
            },{
                upsert:true
            });
        })
        
        

        let result = await User.find({id: instagramID});
        console.log(result);
        res.status(200).json(result);
        

    }catch(err){
        console.log(err);

    }
}



