const {Favorite, Game, User} = require('../models')

class FavoriteController{
    static async addFavorite (req, res, next) {
        const GameId = req.params.id
        const UserId = req.user.id
        try {
              const game = await Game.findByPk(GameId)
                
                if (!game) {
                    throw {name: 'NoGame'}
                }
               const [favGame, created] = await Favorite.findOrCreate({
                    where :{
                    UserId,
                    GameId
                    }
               })
               
               if (!created) {
                  throw {name: `alreadyfavorite`}
                }
               res.status(201).json(favGame)
        } catch (err) {
           next(err)
        }
    }

    static async showFavorite(req,res,next){
        const UserId = req.user.id
        try {
           
            const favGame = await  Favorite.findAll({
                    where :{
                        UserId,
                    },
                    include : [
                        {
                            model: Game
                        },
                        {
                            model: User,
                            attributes: ['email','id']
                        }
                    ]
                })
                res.status(200).json(favGame) 

        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

module.exports = FavoriteController