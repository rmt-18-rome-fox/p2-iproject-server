
const ErrorHandler = (err, req, res, next) => {
    switch (err.name) {
        case 'SequelizeValidationError': {
            res.status(400).json({message: err.errors[0].message})
            break;
        }
        
        case 'ROLE_INVALID': {
            res.status(400).json({message: "Role is Invalid"})
            break;
        }

        case 'NEED_ONE_TAG': {
            res.status(400).json({message: "You need to at least pick one tag"})
            break;
        }
        
        case 'SequelizeUniqueConstraintError': {
            res.status(400).json({message: "Email must be Unique"})
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

        case 'NOT_CUSTOMER': {
            res.status(403).json({message: "User is not a Customer"})
            break;
        }

        case 'NOT_ARCHITECT': {
            res.status(403).json({message: "User is not a Architect"})
            break;
        }

        case 'ARCHITECT_UNAUTHORIZED': {
            res.status(403).json({message: "Architect Unauthorized"})
            break;
        }
        
        case 'ARCHITECT_NOT_FOUND': {
            res.status(404).json({message: "Architect not Found"})
            break;
        }
        
        case 'PORTOFOLIO_NOT_FOUND': {
            res.status(404).json({message: "Portofolio not Found"})
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