const mongoose = require('mongoose')
const Mail = require('../../models/mail')


exports.createMail = async (req, res) =>{

    try{
        console.log("Create mail");

        let mail = new Mail({
        });

        let result = await mail.save();
        console.log("Mail " + req.body._id + " saved");
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}



exports.readMails = async (req, res) =>{

    let result = await Mail.find({});
    res.status(200).json(result);

}



exports.readMailById = async (req, res) =>{
    let result = await Post.find({_id: req.body._id});
    res.status(200).json(result);
}



exports.updateMail = async (req, res) =>{
    try{
        console.log("updateMAil");
        let result = await Mail.updateOne({_id: req.body._id},{
        });
        console.log("Mail " + result._id + " updated");
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}



exports.deleteMail = async (req, res) =>{

    try{
        console.log("deleteMail"); 
        let result = await Mail.remove({_id:req.body._id});
        console.log("Mail " + result._id + " deleted");
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
}