// const multer = require('multer')
const FormData = require('form-data')
const instanceAxios = require('../apis/instanceAxios')

class imageKit {

    static async sentImage(req, res, next) {
        try {
            const dataSent = req.file.buffer.toString('base64')

            console.log('masuk IMGKIT');
            let form = new FormData();
            form.append("file", dataSent);
            form.append("fileName", req.file.originalname)

            const response = await instanceAxios.post('/files/upload', form, {
                headers: form.getHeaders()
            })

            req.dataImgUrl = response.data.url

            next()
        } catch (err) {
            console.log(err);
            next(err)
        }


    }

}

module.exports = imageKit