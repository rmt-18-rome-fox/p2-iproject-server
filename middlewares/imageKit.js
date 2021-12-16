const FormData = require('form-data') // post
const axios = require('axios'); // post

const imageKit = async(req, res, next) => {
    try {
        if (req.file == null) {
            next ()
        } else {
            var form = new FormData;
            form.append("file", req.file.buffer.toString("base64"));
            form.append("fileName", req.file.originalname);
            const privateKey = process.env.PRIVATE_KEY;
            const endcodedPrivateKey = Buffer.from(privateKey).toString('base64');
            const { data } = await axios({
                method: "POST",
                url: " https://upload.imagekit.io/api/v1/files/upload",
                data: form,
                headers: {
                    ...form.getHeaders(),
                    Authorization: `Basic ${endcodedPrivateKey}`
                }
            });
            req.body.imageUrl = data.url
            next()
        }

    } catch (err) {
        next(err)
    }
}

module.exports = {imageKit}
