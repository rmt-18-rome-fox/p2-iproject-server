const errorHandler = (error, req, res, next) => {
    console.log(error);
    if (error.name === "SequelizeUniqueConstraintError" || error.name === "SequelizeValidationError") {
        // let arrError = error.errors.map(el =>  el.message )
        res.status(400).json({ message: error.errors[0].message })
    } else if (error.name == "Bad Request") {
        if (!error.message) {
            res.status(400).json({ message: `Bad Request`})
        } else {
            res.status(400).json({ message: error.message})
        }
    } else if (error.name == `Login Failed`) {
        if (!error.message) {
            res.status(401).json({ message: `Invalid Login`})
        } else {
            res.status(401).json({ message: error.message})
        }
    } else if (error.name == `Error Not Found`) {
        
        if (!error.message) {
            res.status(404).json({ message: `Error Not Found`})
        } else {
            res.status(404).json({ message: error.message})
        }
    } else if (error.name == "Unauthorize") {
        res.status(401).json({ message: `Invalid email/password`})
    } else if (error.name === `JsonWebTokenError`) {
        res.status(401).json( { message: `Invalid Token`})
    } else if (error.name == `Invalid Token`) {
        res.status(401).json({ message: `Invalid Access Token`})      
    } else if (error.name == `Forbidden`) {
        res.status(403).json({ message: `Forbidden Access. You are not authorized`})
    } else if (error.name == `MulterError`) {
        res.status(413).json({ message: `File Size Limits is 255 KB` , })
    } else if (error.name == `Request Entity Too Large`) {
        res.status(413).json({ message: `File Size Limits` , })
    } else if (error.name == `Unsopported File Type`) {
        res.status(415).json({ message: `File type does not supported` })
    } else {
        // console.log(error.message);
        res.status(500).json({ message: error.message})
    }
}

module.exports = errorHandler