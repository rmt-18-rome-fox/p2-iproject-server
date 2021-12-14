
const ErrorHandler = (err, req, res, next) => {
    switch (err.name) {
        case 'ROLE_INVALID': {
            res.status(400).json({message: "Role is Invalid"})
            break;
        }

        case 'unauthorized': {
            res.status(401).json('invalid email/password')
            break;
        }
    
        case 'USER_UNAUTHORIZED': {
            res.status(401).json({message: "Invalid Token"})
            break;
        }

        case 'JsonWebTokenError': {
            res.status(401).json({message: "Invalid Token"})
            break;
        }
        default: {
            res.status(500).json(err)
            // res.status(500).json({message: "Internal Server Error"})
            break;
        }
           
    }
}

module.exports = ErrorHandler