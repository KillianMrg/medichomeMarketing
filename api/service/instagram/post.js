var FB = require('fb'),
    fbApp = new FB.Facebook(options);

fbApp.setAccessToken('EAAazsfFwidUBAJruyvHZB2M9pqwZCtb25e81kQD9MECWkSowgZCbZC8O7ZC28PZCq1dsBcyaM2tUrbKfI5Gj9L2oMbij6T3fOSZBEG2p3OTZBu1BRTnymEDEdsjv98cJ5uVKlZACG8ctz2XLcAkJo0qkY5wiWjt3CUZA5m98zZApmwxVp0Wprp82Be2uGn5QQevlZAwjcqglBJH0t5buUr9KAZA8YYneidcAeMMSN8BNo0z8DgmpHkeoTU0LOPc2X1Uj2R4AZD');



exports.registerPost = (req,res) => {
    try{
        fbApp.api('17841447861770720',
            {"fields":"business_discovery.username(medichome_utbm){media_count,media}"},
            'GET',
            function (response) {
                response.business_discovery.media.data.forEach(function(element) {
                    fbApp.api(element.id,
                    'GET',
                    {"fields":"id,ig_id,caption,comments_count,like_count,timestamp,username"},
                    function (content) {

                        const post = new post({
                            id: content.id,
                            ig_id: content.ig_id,
                            username: content.username,
                            titleMarketing: content.titleMarketing,
                            caption: content.caption,
                            comments_count: content.comments_count,
                            like_count: content.like_count                  
                        });
                        let result = await post.save();
                        console.log("Post " + element.id + " saved");
                        
                    }
                );
            })
        })
    }
    catch(err){
        console.log(err);
    }
}


exports.getAll = (req,res) => {

    try{

        this.registerPost();

        let result = await post.find({});
        res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getPostById = (req,res) => {

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

exports.getPosts = (req,res) => {

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




exports.getStatistics = (req,res) => {

    FB.api(
        '/17918146075720804/insights',
        'GET',
        {"metric":"engagement,impressions,reach,saved","access_token":"EAAazsfFwidUBAJruyvHZB2M9pqwZCtb25e81kQD9MECWkSowgZCbZC8O7ZC28PZCq1dsBcyaM2tUrbKfI5Gj9L2oMbij6T3fOSZBEG2p3OTZBu1BRTnymEDEdsjv98cJ5uVKlZACG8ctz2XLcAkJo0qkY5wiWjt3CUZA5m98zZApmwxVp0Wprp82Be2uGn5QQevlZAwjcqglBJH0t5buUr9KAZA8YYneidcAeMMSN8BNo0z8DgmpHkeoTU0LOPc2X1Uj2R4AZD"},
        function(response) {
            
      );
}