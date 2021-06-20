const nodemailer = require('nodemailer');

const mongoose = require('mongoose')
const Mail = require('../../models/mail')


const transporter = nodemailer.createTransport({
    host: 'mail.linogie.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'test@linogie.com', // generated ethereal user
        pass: '!?4TheProject'  // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
});



exports.sendEmails = (req, res) => {

    console.log(req.body);

    try{

        if(Array.isArray(req.body.email)){
            req.body.email.forEach(function (element){

                console.log(element);

                const output = `
                    <p>You have a new contact request</p>
                    <h3>Contact Details</h3>
                    <ul>  
                    <li>Name: ${req.body.name}</li>
                    <li>Company: ${req.body.company}</li>
                    <li>Email: ${element}</li>
                    <li>Phone: ${req.body.phone}</li>
                    </ul>
                    <h3>Message</h3>
                    <p>${req.body.message}</p>
                `;
                // create reusable transporter object using the default SMTP transport
            

                // setup email data with unicode symbols
                let mailOptions = {
                    from: '"Nodemailer Contact" <test@linogie.com>', // sender address
                    to: element, // list of receivers
                    subject: 'Node Contact Request', // Subject line
                    text: 'Hello world?', // plain text body
                    html: output // html body
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, (err, info) => {

                    console.log('Message sent: %s', info.messageId);   

                    res.status(200).json(info);
                });
            })
        }
        else{
            const output = `
                <p>You have a new contact request</p>
                <h3>Contact Details</h3>
                <ul>  
                <li>Name: ${req.body.name}</li>
                <li>Company: ${req.body.company}</li>
                <li>Email: ${req.body.email}</li>
                <li>Phone: ${req.body.phone}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
            `;
            // create reusable transporter object using the default SMTP transport
        

            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Nodemailer Contact" <test@linogie.com>', // sender address
                to: req.body.email, // list of receivers
                subject: 'Node Contact Request', // Subject line
                text: 'Hello world?', // plain text body
                html: output // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (err, info) => {

                console.log('Message sent: %s', info.messageId);   

                res.status(200).json(info);
            });
        }

        res.status(200).json();
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

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