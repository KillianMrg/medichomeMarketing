const FB = require('fb'); 


exports.getAccessToken = (req,res) => {
    FB.login(function(response) {

        console.log(response);

    })
}