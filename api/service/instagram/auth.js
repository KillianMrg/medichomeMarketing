/*var FB = require('fb'),
    fbApp = new FB.Facebook();

fbinit = function(){
    fbApp.init({
    appId  : 'YOUR APP ID',
    status : true, // check login status
    cookie : true, // enable cookies to allow the server to access the session
    xfbml  : true  // parse XFBML
  });
}

exports.getAccessToken = (req,res) => {

    fbinit();

    if(this.checkAuth == 'connected')
    {
        console.log('already connected');
    }else{
        fbApp.login(function(response) {

        console.log(response);

        }, {scope: 'public_profile,email'})
    }
}


exports.checkAuth = (req,res) => {

    fbApp.getLoginStatus(function(response) {
        return response.status;
    });
// }*/