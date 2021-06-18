const mongoose = require('mongoose')
const Post = require('../../models/post')


exports.createPost = async (req, res) =>{

    try{


        let post = new Post({
            caption: req.body.caption,
            titlePost: req.body.titlepost,
            author: req.body.author,
            createTimestamp: Date.now(),
            status: "saved"
        });

        let result = await post.save();
        console.log("Post " + req.body._id + " saved");
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}



exports.readPostsSaved = async (req, res) =>{

    let result = await Post.find({ig_id: { $exists: false }});
    res.status(200).json(result);

}



exports.readPostSavedById = async (req, res) =>{
    let result = await Post.find({_id: req.body._id});
    res.status(200).json(result);
}



exports.updatePost = async (req, res) =>{
    try{
        console.log("updatePost");
        let result = await Post.updateOne({_id: req.body._id},{
            caption: req.body.caption,
            titlePost: req.body.titlepost,
            authorLastUpdate: req.body.author,
            updateTimestamp: Date.now(),

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
        console.log("deletePost"); 
        let result = await Post.remove({_id:req.body._id});
        console.log("Post " + result._id + " deleted");
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
}


