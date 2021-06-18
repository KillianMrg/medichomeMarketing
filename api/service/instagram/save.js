const mongoose = require('mongoose')
const Post = require('../../models/post')


exports.createPost = async (req, res) =>{

    try{
        let post = new Post({
            caption: req.message,
        });

        let result = await post.save();
        console.log("Post " + result._id + " added");
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}



exports.readPostsSaved = async (req, res) =>{

    let result = await Post.find({ig_id: { $e: null }});
    res.status(200).json(result);

}



exports.readPostSavedById = async (req, res) =>{
    let result = await Post.find({_id: req._id});
    res.status(200).json(result);
}



exports.updatePost = async (req, res) =>{
    try{
        let result = await Post.updateOne({_id: req._id},{
            caption: req.message,
        });
        console.log("Post " + result._id + " updated");
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}



exports.deletePost = async (req, res) =>{

    try{

        let result = await Post.remove({_id:req._id});
        console.log("Post " + result._id + " deleted");
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
}


