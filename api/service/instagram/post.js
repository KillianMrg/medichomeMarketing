const mongoose = require('mongoose')
const Post = require('../../models/post')
const User = require('../../models/user')
var FB = require('fb'),
    fbApp = new FB.Facebook();

fbApp.setAccessToken('EAADHiUjXdP8BADF4IcVmcxTVyZAUe0xH7BuG2BkZCGuFWktLfh2QiEpEyXDXO3paMPCP89XMCppZB8RpZAL4iFjgcJNdfd9YnUil0dwu0Qikn4bNtHMXZCJJEUhc0CpYwF8H6EsXGgk1yABrsUljory4cVDNkr43C70XfoixJr68hZCEUAEq8kRXWrJhuoexnOIWaJuiqc5jEVgnlC82WZA');

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
                timestamp: req.timestamp,
                permalink: req.permalink
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
        {"fields":"id,ig_id,timestamp,comments_count,caption,like_count,media_type,media_url,permalink"},
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



