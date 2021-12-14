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

    static async getAyahByJuzs (req, res, next) {
        try {
            let juzsNumber = +req.params.juzsNumber
            let allAyah = await axios({
                method: 'GET',
                url: `${API_URL}/quran/verses/indopak?juz_number=${juzsNumber}`
            })

            let translation = await axios({
                method: 'GET',
                url: `${API_URL}/quran/translations/131?juz_number=${juzsNumber}`
            })
            // console.log(allAyah)
            res.status(200).json({ayah: allAyah.data, translation: translation.data})
        } catch (err) {
            // console.log(err)
            next(err)
        }
    }

    static async getAllChapter (req, res, next) {
        try {
            let allSurah = await axios({
                method: 'GET',
                url: `${API_URL}/chapters`
            })
            res.status(200).json(allSurah.data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = DataController
