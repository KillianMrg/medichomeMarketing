const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

exports.sendMail = (req, res) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
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
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <test@linogie.com>', // sender address
        to: 'killian.morge@gmail.com', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        //html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
         res.render('contact', {layout: false});
    });
}