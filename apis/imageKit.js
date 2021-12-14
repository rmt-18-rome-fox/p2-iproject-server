const axios = require('axios');

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const instanceAxios = axios.create({
    baseURL: 'https://upload.imagekit.io/api/v1/',
    auth: {
        username: PRIVATE_KEY
    }
})

module.exports = instanceAxios;