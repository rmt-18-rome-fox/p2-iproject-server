const axios = require(`axios`)

let fetchDog = async(req, res, next) => {
    try {

        const response = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=4`,
        { 
          headers: { "x-api-key": `${process.env.DOOOOOOOOG}` }
        })

        req.user.dog = response.data

        next()
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    fetchDog
}