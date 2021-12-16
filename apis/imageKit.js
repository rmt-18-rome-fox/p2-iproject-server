const axios = require('axios')

const imageKit = axios.create({
  baseURL: 'https://upload.imagekit.io/api/v1/',
  auth: {
    username: process.env.IMAGEKIT_PRIVATE_KEY
  }
})

module.exports = { imageKit }