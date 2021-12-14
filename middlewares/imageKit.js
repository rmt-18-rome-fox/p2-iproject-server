const FormData = require('form-data');
const instanceAxios = require('../apis/imageKit');

const imageKit = async (req, res, next) => {
    try {
        const formatImg = req.file.mimetype.split('/');

        if(formatImg[0] !== 'image') {
            throw {name: 'WrongFileType'}
        }
        const imageSent = req.file.buffer.toString('base64');
        
        let form = new FormData();
        form.append('file', imageSent);
        form.append('fileName', req.file.originalname);
        
        const response = await instanceAxios.post('/files/upload', form, {
            headers: form.getHeaders(),
        })
        req.urlSent = response.data.url;

        next();
    } catch (err) {
        next(err);
    }
}

module.exports = imageKit;