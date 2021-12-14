const axios = require('axios')

const PK = process.env.PK

const instanceAxios = axios.create({
    baseURL : "https://upload.imagekit.io/api/v1/",
    auth: {
        username : PK
    }
})

module.exports = instanceAxios