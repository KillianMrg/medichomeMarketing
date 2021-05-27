//const User = require('../models/user');

// Using ES2015 import through Babel

const ACCESS_TOKEN = "EAAazsfFwidUBAAAAFLZC8TjCxEqfJZBy69XjxwCDQ6hx0NnJfcaWT5ZBbbMITtTMbfracFVEzq2UjUiaCBw96YrpNGNUKLIt1lcSDwMQpKHC9x0gPeCEoZCtZAo4phayPwQrHBg45MhOKuKZAEFj4TlYDSJ0kZBydhdtQtfdlFFtIGrEiUvRKmnYbDUTuZBfuZC7QO4k0ZB6aBiyh0xUZCNWPOf7ylwbEZC4ZAlfCOMPYR17rXAaOZAjiGrh6w";
var FB = require('fb');



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

    FB.setAccessToken(ACCESS_TOKEN);
    FB.api(
    '17841447861770720?fields=business_discovery.username(medichome_utbm){media_count,media}',
    //'17841447861770720?fields=business_discovery.username(bluebottle){media}',
    'GET',
    function (response) {
        console.log(response);
        return res.status(200).json(response);
    }
);
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