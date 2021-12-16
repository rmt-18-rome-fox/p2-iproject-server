const API_URL = 'https://api.quran.com/api/v4'
const axios = require ('axios');
const { rmSync } = require('fs');
const requestIp = require('request-ip');
const { translation } = require('../helper/translation');
const ipify = require('ipify')

class DataController {
    static async getAllJuzz (req, res, next) {
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
            let page = +req.query.page
            if(!juzsNumber) {
                juzsNumber = 1
            }else {
                juzsNumber
            }
            if (!page) {
                page = 1
            }else {
                page
            }

            let {translate, audio} = req.query
            if(translate) {
                translate = translation(translate)
            }else {
                translate = translation('english')
            }
            
            let allAyah = await axios({
                method: 'GET',
                url: `${API_URL}/verses/by_juz/${juzsNumber}?words=false&translations=${translate}&audio=9&fields=text_indopak&page=${page}`
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
            let page = +req.query.page
            if (!page) {
                page = 1
            }else {
                page
            }

            let {translate} = req.query
            if(translate) {
                translate = translation(translate)
            }else {
                translate = translation('english')
            }

            let surah = await axios({
                method: 'GET',
                url: `${API_URL}/verses/by_chapter/${id}?words=false&translations=${translate}&audio=9&fields=text_indopak&page=${page}`
            })
            res.status(200).json(surah.data)

        } catch (err) {
            next(err)
        }
    }

    static async getAudioList (req, res, next) {
        try {
            let audioListVersion = await axios({
                method: "GET",
                url: `${API_URL}/resources/recitations`
            })
            res.status(200).json(audioListVersion.data)
        } catch (err) {
            next(err)
        }
    }

    static async getPrayerTimes (req, res, next) {
        try {
            let date = new Date();
            let month = date.getMonth();
            let year = date.getFullYear();
            const getip = await ipify({useIPv6: false})
            // console.log(getip)
            let access_key = process.env.IPSTACK_KEY
            let location = await axios({
                method: 'GET',
                url: `http://api.ipstack.com/${getip}?access_key=${access_key}`
            })

            // console.log(location.data)
            let city = location.data.city
            let country = location.data.country_name
            // console.log(city, country)
            let prayerTime = await axios({
                method: 'GET',
                url: `http://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&month=${month + 1}&year=${year}`
            })
            res.status(200).json(prayerTime.data)
        } catch (err) {
            // console.log(err)
            next(err)
        }
    }
}

module.exports = DataController
