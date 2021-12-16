const axios = require('axios')
const formData = require('form-data')

function imagekit(req, res, next) {
    // console.log(req.files,'req imagekit<<<<<<<<<<<<<<<<<<<<<')
    let pictures = []

    if (!req.files.length) {
        next()
    }
    else if (req.files.length === 1) {
        console.log(req.files,'req file di imagekit<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
        req.files.forEach((element) => {
            if (element.mimetype !== 'image/jpeg' && element.mimetype !== 'image/png') {
                next({ code: 400, message: 'You can only upload png or jpg' })
            }
            else {
                let api_key = Buffer.from(process.env.PRIVATE_KEY, 'utf8').toString("base64")
                const data = new formData()
                data.append('file', element.buffer.toString('base64'))
                data.append('fileName', element.orginalname)

                axios({
                    url: 'https://upload.imagekit.io/api/v1/files/upload',
                    method: 'post',
                    headers: {
                        Authorization: `Basic ${api_key}`,
                        ...data.getHeaders()
                    },
                    data: data
                })
                    .then((result) => {
                        pictures.push(result.data.url)
                        req.image = pictures

                        if (req.image.length === 1) {
                            next()
                        }
                    })
                    .catch((err) => {
                        next({ code: 500, message: err.message })
                    })
            }
        })
    }
    else if (req.files.length === 2) {
        req.files.forEach((element) => {
            if (element.mimetype !== 'image/jpeg' && element.mimetype !== 'image/png') {
                next({ code: 400, message: 'You can only upload png or jpg' })
            }
            else {
                let api_key = Buffer.from(process.env.PRIVATE_KEY, 'utf8').toString("base64")
                const data = new formData()
                data.append('file', element.buffer.toString('base64'))
                data.append('fileName', element.orginalname)

                axios({
                    url: 'https://upload.imagekit.io/api/v1/files/upload',
                    method: 'post',
                    headers: {
                        Authorization: `Basic ${api_key}`,
                        ...data.getHeaders()
                    },
                    data: data
                })
                    .then((result) => {
                        pictures.push(result.data.url)
                        req.image = pictures

                        if (req.image.length === 2) {
                            next()
                        }
                    })
                    .catch((err) => {
                        next({ code: 500, message: err.message })
                    })
            }
        })
    }
    else {
        req.files.forEach((element) => {
            if (element.mimetype !== 'image/jpeg' && element.mimetype !== 'image/png') {
                next({ code: 400, message: 'You can only upload png or jpg' })
            }
            else {
                let api_key = Buffer.from(process.env.PRIVATE_KEY, 'utf8').toString("base64")
                const data = new formData()
                data.append('file', element.buffer.toString('base64'))
                data.append('fileName', element.orginalname)

                axios({
                    url: 'https://upload.imagekit.io/api/v1/files/upload',
                    method: 'post',
                    headers: {
                        Authorization: `Basic ${api_key}`,
                        ...data.getHeaders()
                    },
                    data: data
                })
                    .then((result) => {
                        pictures.push(result.data.url)
                        req.image = pictures

                        if (req.image.length === 3) {
                            next()
                        }
                    })
                    .catch((err) => {
                        next({ code: 500, message: err.message })
                    })
            }
        })
    }
}

module.exports = imagekit