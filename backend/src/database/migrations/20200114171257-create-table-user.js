'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            avatar_url: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },

            github: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            bio: {
                type: Sequelize.TEXT,
                allowNull: false,
            },

            techs: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            latitude: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },

            longitude: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('users');
    },
};
