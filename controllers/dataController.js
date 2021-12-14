const API_URL = 'https://api.quran.com/api/v4'
const axios = require ('axios')

class DataController {
    static async getAllJuzz (rew, res, next) {
        try {
            let url = `${API_URL}/juzs`
            let allJuzz = await axios({
                method: 'GET',
                url
            })
            res.status(200).json(allJuzz.data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = DataController
