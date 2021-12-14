const multer  = require('multer');


const upload = multer({
    limits: {fileSize: 500000}
});


module.exports = upload;