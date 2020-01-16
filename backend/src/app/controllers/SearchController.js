const Sequelize = require('sequelize');
const user = require('../models/users');

module.exports = {
    async index(req, res) {
        const Op = Sequelize.Op;
        const { techs } = req.query;

        if (!techs) {
            return res
                .status(400)
                .json({ Error: 'Some query params is null ' });
        }

        const found = await user.findAll({
            where: {
                techs: {
                    [Op.like]: `%${techs}%`,
                },
            },
        });

        if (!found || found.length <= 0) {
            return res
                .status(404)
                .json({ Error: 'any user is found with this tecnologies ' });
        }

        return res.json(found);
    },
};
