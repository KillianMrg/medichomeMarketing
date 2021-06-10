//const User = require('../models/user');

// Using ES2015 import through Babel


var fbApp = require('fb');
const post = require('../models/post');

exports.authentificate = async (req,res,next) => {


}

exports.getById = async (req, res, next) => {
    fbApp.setAccessToken("IGQVJYbDBOdjRTZAFR5RlhNTnBScF9Pd0ZAITWVjQkJydmdobldwbkhicWpTdVJMNTFWZAkdKcjhpVmpqaDVlb2U4TUF2SE9YRDJON1pjVVJWQXUyb3ZAVbzdwN0dzWkhCZAlI5ZA3lTSkQ1cGVpMnIzSVhSSAZDZD");

    const { id } = req.params;

    try {
        let user = await User.findById(id);

        if (user) {
            return res.status(200).json(user);
        }

        return res.status(404).json('user_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}



exports.getAll = async (req, res, next) => {
    try{
        console.log("GetAll");
        fbApp.setAccessToken("EAAHn5HdVw6ABAIczNGL45iJ9marm2mFKqlQOYpoeKko1orllVsvje6HIfnJDhERLC8PnqZCbTg3dYOxjhkNXtxx3TPdFHF6YUUPiiITydj9LkwG9KKPg1WNUBYFDCn9aBNF35nRrQ3P8bB95Px0hiFRRZAGeWC65o22tZA9yivxHS86xLQY0Xq8juk3MeWeWhDKsc4AS82R40FupvgWIn2CNPCPNKScMYyZAn9mKa2SeyBbLUal3");
        console.log(fbApp.getAccessToken());

        fbApp.api(
            '/17841447861770720',
            'GET',
            {"fields":"business_discovery.username(bluebottle){followers_count,media_count}"},
            function(response) {
                console.log(response);
            }
          );
        /*fbApp.api('/921570068625876',
        {"fields":"business_discovery.username(medichome_utbm){media_count,media}"},
        'GET',
        function (response) {
            console.log(response);
            /*response.business_discovery.media.data.forEach(function(element) {
                console.log(element.id);
                FB.api(element.id,
                    'GET',
                    //{"fields":"id,ig_id,caption,comments_count,like_count,media_type,media_url,timestamp,username,hidden}"},
                    {"fields":"id,ig_id,caption,comments_count,like_count,timestamp,username"},
                    function (content) {

                        const post = new Post({
                            id: content.id,
                            ig_id: content.ig_id,
                            username: content.username,
                            titleMarketing: content.titleMarketing,
                            caption: content.caption,
                            comments_count: content.comments_count,
                            like_count: content.like_count
                        });
                        let result = post.save();
                        console.log("Post " + element.id + " saved");
                        
                    }
                );
            })
        })

        let result = await post.find({});
        res.status(200).json(result);
        })*/
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

/*exports.getAllContentById = async (req, res, next) => {
    FB.setAccessToken(ACCESS_TOKEN);
    req.forEach(function(element) {
        FB.api(element.id,
            'GET',
            {"fields":"id,ig_id,caption,comments_count,like_count,media_type,media_url,timestamp,username,hidden}"},
            function (response) {
                console.log(element.id);
                return res.status(200).json(response);
            }
        );
    })
    
}

exports.getAllContent = async (req, res, next) => {

    FB.setAccessToken(ACCESS_TOKEN);
    req.forEach(function(element) {

        FB.api(element.id,
            'GET',
            {"fields":"id,ig_id,caption,comments_count,like_count,media_type,media_url,timestamp,username,hidden}"},
            function (response) {
                console.log(element.id);
                return res.status(200).json(response);
            }
        );
    })
    
}*/







exports.add = async (req, res, next) => {
    const temp = {};

    ({ 
        name     : temp.name,
        firstname: temp.firstname,
        email    : temp.email,
        password : temp.password
    } = req.body);

    Object.keys(temp).forEach((key) => (temp[key] == null) && delete temp[key]);

    try {
        let user = await User.create(temp);

        return res.status(201).json(user);
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.update = async (req, res, next) => {
    const temp = {};

    ({ 
        name     : temp.name,
        firstname: temp.firstname,
        email    : temp.email,
        password : temp.password
    } = req.body);

    try {
        let user = await User.findOne({ email: temp.email });

        if (user) {       
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    user[key] = temp[key];
                }
            });
            
            await user.save();
            return res.status(201).json(user);
        }

        return res.status(404).json('user_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) => {
    const { id } = req.body;

    try {
        await User.deleteOne({ _id: id });

        return res.status(204).json('delete_ok');
    } catch (error) {
        return res.status(501).json(error);
    }
}