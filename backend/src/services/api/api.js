const axios = require('axios');

const api = axios.default.create({
    baseURL: 'https://api.github.com/users',
});

module.exports = api;
