const {Game} = require('../models')
const axios = require('axios')
const { Op } = require("sequelize");

class GameController{
    static async addGame(req,res,next){
       try {
        const {data} = await axios({
            method: 'GET',
            url: process.env.APIURL,
            params: {id: process.env.APID},
            headers:{
            'x-rapidapi-host': process.env.APIHOST,
            'x-rapidapi-key': process.env.APIKEY
            }
        })
        const limit =  data.slice(0, 50)
          limit.map(el=>{
            delete el.id 
            delete el.freetogame_profile_url
        })
        const game = await Game.bulkCreate(limit)
        res.status(201).json(game)
       } catch (err) {
           next(err)
       }
    }

    static async showGame(req,res,next){ 
        try {
            let where ={}
            let {title,genre,page} = req.query
            if(!page) page = 1
            page = (page-1) *5

            if (title){
                where = {...where,title : {[Op.iLike] : `%${title}%`} }
            }
            if (genre) {
                where = {...where,genre : {[Op.iLike] : `%${genre}%`} }
            }

            const games = await Game.findAndCountAll({
                where,
                offset: page,
                limit : 5,
                order : [['title', 'ASC']]
            })
          
            const obj ={
                TotalPage : Math.ceil(games.count / 5),
                CurrentPage : req.query.page,
                TotalPost : games.count,
                Posts : games.rows
            }
            if (obj.CurrentPage === undefined) {
                obj.CurrentPage = 1
            }
            if (obj.TotalPage === 0) {
                obj.TotalPage = 1
            }
         
            res.status(200).json(obj)
        } catch (err) {
            console.error(err)
             next(err)
        }
    }

    static async showOneGame(req,res,next){
             const id = req.params.id
        try {
            const game = await Game.findByPk(id)
            if (!game) {
               throw {name:"NoGame"}
            } else {
                res.status(200).json(game)
            }
        } catch (err) {
            next(err)
        }
    }

}

module.exports = GameController