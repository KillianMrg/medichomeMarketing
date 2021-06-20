const mongoose = require('mongoose')
const Post = require('../../models/post')
const Comment = require('../../models/comment')
const User = require('../../models/user')
var FB = require('fb'),
    fbApp = new FB.Facebook();


fbApp.setAccessToken('EAADHiUjXdP8BAEY0Pj98GZB0bgzPeB2uSqIDPsHYEyB9UPitSFZBBVXVnLSmQqEwLq9HzG3ZAx6vtgjzqpFdhTuyJWSZCMTERtZA0vSI1UAaG4Mamz7R3cUryhG26EEKO2fDLKIKZA4l7E8JctyZBqZBY8yaLhB4ZAZAZAX9DopaIbtwzbU3tesH2csVTD5yPR7ZA4a7JlJBmXT90n61bWZBJKwv4');


var instagramID= "17841447865985886";

exports.updateToken = (req,res) => {
    console.log("updateToken");
    fbApp.setAccessToken(req.body.token);
    res.status(200).json();
}



registerOneComment = async (req, res) => {
    await Comment.findOneAndUpdate({id: req.element.id},
        {
            mediaId: req._id,
            id: req.element.id,
            text: req.element.text,
            username: req.element.username,
            timestamp: req.element.timestamp,
            like_count: req.element.like_count
        },{
            upsert:true
        });
}

registerOne = async (req,res) => {
    try{
        let result = await Post.findOneAndUpdate({ig_id: req.ig_id},
        {
            id: req.id,
            ig_id: req.ig_id, 
            username: req.username,
            caption: req.caption,
            comments_count: req.comments_count,
            like_count: req.like_count, 
            media_type: req.media_type,
            media_url: req.media_url,
            timestamp: req.timestamp,
            permalink: req.permalink
        },{
            upsert:true
        });
        
        
        if(typeof req.comments !=='undefined'){
            req.comments.data.forEach(function(element){
                this.registerOneComment({_id: result._id, element: element});
            })
        }
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
        {"fields":"id,ig_id,timestamp,comments_count,caption,like_count,media_type,media_url,permalink,comments.limit(10){text,username,timestamp,like_count,id}"},
        function (content) {
            this.registerOne(content);
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
        console.log('getAllPosts');
        await this.registerPosts();

        let result = await Post.find({});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getPostById = async (req,res) => {
    try{

        console.log('getPostById');
        await this.registerPosts();

        let result = await Post.find({_id: req.body._id});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getPosts = async (req,res) => {

    try{
        console.log('getPosts');
        await this.registerPosts();

        let result = await Post.find({ig_id: { $exists: true}});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getComments = async (req,res) => {
    try{

        console.log('getComments');
        await this.registerPosts();

        let result = await Comment.find({});
        console.log(result);
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getCommentsByMedia = async (req,res) => {
    try{

        console.log('getCommentsByMedia');
        await this.registerPosts();

        let result = await Comment.find({mediaId: req.body._id});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getCommentById = async (req,res) => {
    try{

        console.log('getCommentById');
        await this.registerPosts();

        let result = await Comment.find({_id: req.body._id});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

registerUserStats = async (req, res) =>{
    await User.updateOne({id: instagramID},
    {
        id: instagramID,
        followersCount: req.followers_count,
        followsCount: req.follows_count, 
        mediaCount: req.media_count
    },{
        upsert:true
    });
}


registerInsightsStats = async (req, res) =>{
    await User.updateOne({id: instagramID},
    {
        id: instagramID,
        impressions: req.data[0].values[0].value,
        reach: req.data[1].values[0].value, 
        emailContacts: req.data[2].values[0].value,
        phoneCallClicks: req.data[3].values[0].value,
        textMessageClicks: req.data[4].values[0].value,
        directionsClicks: req.data[5].values[0].value, 
        websiteClicks: req.data[6].values[0].value,
        profileViews: req.data[7].values[0].value
    },{
        upsert:true
    });
}




exports.getStats = async (req,res) => {
    try{
        console.log('User insights');

        await fbApp.api(
            '/17841447865985886',
            'GET',
            {"fields":"followers_count,follows_count,media_count"},
            function(response) {
                this.registerUserStats(response)
            }
        );

        await fbApp.api(
            '/17841447865985886/insights',
            'GET',
            {"metric":"impressions, reach, email_contacts, phone_call_clicks, text_message_clicks, get_directions_clicks, website_clicks, profile_views","period":"day"},
            function (response) {
                this.registerInsightsStats(response)
            }
        )
        
        

        let result = await User.find({id: instagramID});
        console.log(result);
        res.status(200).json(result);
        

    }catch(err){
        console.log(err);

    }
}



