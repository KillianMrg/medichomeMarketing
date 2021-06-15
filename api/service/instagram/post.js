const mongoose = require('mongoose')
const Post = require('../../models/post')
var FB = require('fb'),
    fbApp = new FB.Facebook();

fbApp.setAccessToken('EAADHiUjXdP8BAP1hAeurAffd56qi1USg2NG4AOUsm1isg8V25tRrh2K2p9I31zFLbi2ouNB9ZB6Drbteu6xviQvEAVZAXZB8Ec82EX8ZCsoeXzjjDXJrHgbSCNAqKuIJwZBxqXTH4GTOwCO4Pn1qyqyhwUvMK00Fkp3f9KXxKIThJM9LFt8ZCKqdBhmGrHBzU4NmMZAfCENn1pZB8wbIOeJg');

registerOne = async (req,res) => {
    try{
        await Post.updateOne({ig_id: req.ig_id},
            {
                id: req.id,
                ig_id: req.ig_id, 
                username: req.username,
                caption: req.caption,
                comments_count: req.comments_count,
                like_count: req.like_count                  
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
        {"fields":"id,ig_id,caption,comments_count,like_count,timestamp,username"},
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
