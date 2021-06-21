const nodemailer = require('nodemailer');

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

    try{

        if(Array.isArray(req.body.email)){
            req.body.email.forEach(function (element){

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

                    console.log('Message sent');  

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

                console.log('Message sent');   

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
