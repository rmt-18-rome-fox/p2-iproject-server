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
                url: `${API_URL}/verses/by_juz/1?words=false&translations=131&audio=1&fields=text_indopak`
            })
            // console.log(allAyah)
            res.status(200).json(allAyah.data)
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

    static async getChapterById (req, res, next) {
        try {
            let id = req.params.chapterNumber

            let surah = await axios({
                method: 'GET',
                url: `${API_URL}/verses/by_chapter/${id}?words=false&translations=131&audio=1&fields=text_indopak`
            })
            res.status(200).json(surah.data)

        } catch (err) {
            next(err)
        }
    }
}

module.exports = DataController
