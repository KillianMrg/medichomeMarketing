const mongoose = require('mongoose')
const Post = require('../../models/post')
var FB = require('fb'),
    fbApp = new FB.Facebook();

fbApp.setAccessToken('EAADHiUjXdP8BAP0FkA4PhGqkPBs8gqUg3sgkGuu6VuagEMhaZBgUDlxw01SlfOObz59cutYd3PQsQnOkPz1v6d1EkxTXis74USOZAukW12j4ZCtZB5dFTilwegu47TjL3sJx4bnuPAD7ei6JFLlTWmIxbAisKxGvdWdiV24gRgaRx9a4tDcFfLOXxK5kQHoZAJUIJuI09tfIx5GKHvUoW');

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

    try{

        this.registerPost();

        let result = await post.find({id: req.id});
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

        let result = await post.find({id_id: { $ne: null }});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}



/*FB.api(
    '/17841447865985886/insights',
    'GET',
    {"metric":"impressions, reach, follower_count, email_contacts, phone_call_clicks, text_message_clicks, get_directions_clicks, website_clicks, profile_views","period":"day"},
    function(response) {
        // Insert your code here
    }
  );

  FB.api(
    '/17841447865985886/insights',
    'GET',
    {"metric":"audience_city, audience_country, audience_gender_age, audience_locale","period":"lifetime"},
    function(response) {
        // Insert your code here
    }
  );


//17841447865985886/insights?metric=impressions, reach, follower_count, email_contacts, phone_call_clicks, text_message_clicks, get_directions_clicks, website_clicks, profile_views&period=lifetime


day: impressions, reach, follower_count, email_contacts, phone_call_clicks, text_message_clicks, get_directions_clicks, website_clicks, profile_views&period=lifetime
lifetime: audience_city, audience_country, audience_gender_age, audience_locale*/