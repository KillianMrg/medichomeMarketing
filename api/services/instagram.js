//const User = require('../models/user');
const FB = require('fb');
const fb = new FB.Facebook(options);

exports.getById = async (req, res, next) => {
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

    FB.setAccessToken('access_token');
    try {
        FB.api(
            '/17841447861770720',
            'GET',
            {"fields":"business_discovery.username(medichome_utbm){media{comments_count,like_count}}"},
            function(res) {

                if(!res || res.error) {
                    console.log(!res ? 'error occurred' : res.error);
                    return res.status(404).json('posts_not_found');
                }
                console.log(res);
                return res.status(200).json(res);
                
            }
          );
    } catch (error) {
        return res.status(501).json(error);
    }
}

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