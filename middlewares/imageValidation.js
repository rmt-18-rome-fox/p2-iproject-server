const imageValidation = async (req,res,next)=>{
    try {
        if (!req.file) {
            throw { name: "notFound"}
        }
        
        if (req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/png' || req.file.mimetype === 'image/jpg') {
            next()
        } else {
            throw {name:"notImage"} 
        }
    } catch (err) {
        next(err)
    }
}

module.exports = imageValidation