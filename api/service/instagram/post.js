var FB = require('fb'),
    fbApp = new FB.Facebook(options);

fbApp.setAccessToken();


exports.getAll = (req,res) => {

    fbApp.api(
        '/17841447861770720',
        'GET',
        {"fields":"business_discovery.username(medichome_utbm){followers_count,media_count}"},
        function(response) {
            // Insert your code here
        }
      );


}