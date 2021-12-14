const errorhandlers = (err,req,res,next) =>{
    console.log(err)
    if(err.name == "SequelizeValidationError" || err.name == "SequelizeUniqueConstraintError" ){
        res.status(400).json({ message: err.errors.map(el => el.message)})
    }




    else{
        res.status(500).json({message: "Internal server error"})
    }



}

module.exports = {errorhandlers}