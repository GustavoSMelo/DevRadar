const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init(
            {
                name: DataTypes.STRING,
                github: DataTypes.STRING,
                avatar_url: DataTypes.STRING,
                longitude: DataTypes.FLOAT,
                latitude: DataTypes.FLOAT,
                techs: DataTypes.STRING,
                bio: DataTypes.TEXT,
            },
            { sequelize: connection }
        );
    }
}

module.exports = User;
