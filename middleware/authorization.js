const {Hero} = require('../models/index')


const authorizeMiddleware = async  (req,res,next) => {
    
    
    try {
        const id = req.params.id
        const result = await Hero.findByPk(id)
       

        if(req.user.role !== "admin"){
            throw {name: "UNAUTHORIZED"}
        }

        next()
        
    } catch (err) {
       next(err)
    }
    


}
module.exports = {  authorizeMiddleware }