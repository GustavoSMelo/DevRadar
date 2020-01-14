const express = require('express');
const routes = express.Router();
const UserController = require('../app/controllers/UserController');
const SearchController = require('../app/controllers/SearchController');

routes.post('/user', UserController.store);
routes.get('/user', SearchController.index);

module.exports = routes;
