const axios = require('axios');

class QuoteController {
    static async getQuote (req, res, next) {
        try {
            const tags = [ 'life', 'inspirational', 'famous-quotes', 'future', 'success']
            const randomSelectort = Math.floor(Math.random()*tags.length)
            const tag = tags[randomSelectort];
            const result = await axios({
                method: 'GET',
                url: `https://api.quotable.io/random?tags=${tag}`,
            })
            const author = result.data.author
            const content = result.data.content
            const quote = content.concat(' -', author)
            res.status(200).json(quote)
        } catch (err) {
            next (err)
        }
    }
}

module.exports = QuoteController