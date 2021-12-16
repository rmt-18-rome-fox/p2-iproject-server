const {New} = require('../models')
const axios = require('axios')

class NewsController {
  static async randomNews(req, res, next) {
        try {
            const {data} = await axios({
                method: 'GET',
                url: process.env.NewsUrl,
                headers: {
                  'x-rapidapi-host': process.env.NewsHost,
                  'x-rapidapi-key': process.env.NewsKey
                }
            })
            const random = Math.floor(Math.random() * 101);
            const limit =  data.slice(random-1, random)
          
           res.status(200).json(limit)
        } catch (err) {
            next(err)
        }
  }
}

module.exports = NewsController