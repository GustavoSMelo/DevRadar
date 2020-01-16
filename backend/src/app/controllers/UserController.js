const user = require('../models/users');
const api = require('../../services/api/api');

module.exports = {
    async store(req, res) {
        const { username, latitude, longitude, techs } = req.body;

        if (!username || !latitude || !longitude || !techs) {
            return res
                .status(400)
                .json({ Error: 'please, fill in all the fields ' });
        }

        const info = await api.get(`/${username}`);

        if (!info || info.length <= 0) {
            return res.status(404).json({ Error: 'User not founded ' });
        }

        const { name = login, avatar_url, bio = 'vazio' } = info.data;

        const newuser = await user.create({
            name,
            avatar_url,
            bio,
            techs,
            latitude,
            longitude,
            github: username,
        });

        if (!newuser) {
            return res
                .status(400)
                .json({ Error: 'Some credentials is missing ' });
        }

        return res.json({
            user: newuser,
            message: 'Success to insert a user ',
        });
    },

    async index(req, res) {
        const users = await user.findAll();

        if (!users || users.length <= 0) {
            return res.status(404).json({ Error: 'Any users registred ' });
        }

        return res.json(users);
    },
};
