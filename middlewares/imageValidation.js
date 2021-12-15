const imageValidation = (req, res, next) => {
    if(req.file !== undefined) {
        if(req.file.size > 255000) {
            next({name : "FILE_TOO_LARGE"}) 
        } else {
            let imgType = req.file.mimetype
            imgType=imgType.split('/')
            if (imgType[0] =='image') {
                next()
            } else {
               next({name : "FILE_NOT_IMAGE"}) 
            }
        }
    } else {
        next()
    }

}

module.exports={imageValidation}