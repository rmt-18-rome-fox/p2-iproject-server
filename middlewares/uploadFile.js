const axios = require("axios")
const FormData = require("form-data")


async function uploadFile(req, res, next) {
    const instanceAxios = axios.create({
        baseURL: "https://upload.imagekit.io/api/v1/",
        auth: {
            username: PRIVATEKEY
        }
    })
    try {
        const data = req.file.buffer.toString("base64")
        let form = new FormData()
        form.append("file", data)
        form.append("fileName", req.file.originalname)
        const response = await instanceAxios.post("/files/upload", form, {
            headers: form.getHeaders(),
        })
        req.url = response.data.url
        console.log(req.url)
        next()
    } catch (error) {
        next()
    }
}

module.exports = { uploadFile }