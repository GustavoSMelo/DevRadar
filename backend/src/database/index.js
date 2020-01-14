const Sequelize = require('sequelize');
const UserModel = require('../app/models/users');
const SQLConfig = require('../config/sql/config');

const connection = new Sequelize(SQLConfig);

UserModel.init(connection);

module.exports = connection;
