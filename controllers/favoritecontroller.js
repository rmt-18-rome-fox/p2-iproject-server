const {Favorite, Game, User} = require('../models')
const nodemailer = require("nodemailer")

class FavoriteController{
    static async addFavorite (req, res, next) {
        const GameId = req.params.id
        const UserId = req.user.id
        const email = req.user.email
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

               const mailer = await Favorite.findOne({
                   where :{id : favGame.id},
                   include : 
                    {
                        model: Game
                    },
                })

               let transporter = nodemailer.createTransport({
                service:'gmail',
                auth: {
                    user: process.env.Email || "gamewebagsur@gmail.com",
                    pass: process.env.PASSWORD || "gameweb12345"
                }
            })
           
            let mailOp = {
                from: process.env.Email,
                to: `${email}`,
                subject: 'Thank You!',
                html: `<b>  Dear ${email} <br>
                You Just Favorite One of Our Game List with Title: ${mailer.Game.title} <br>
                You Can Check Their Web on  ${mailer.Game.game_url} <br>
                <img src="${mailer.Game.thumbnail}" style="width:400px;"/>
                </b>`
              }
              
              transporter.sendMail(mailOp, (err, data)=>{
                if (err){
                    console.log(err)
                } else {
                    console.log('cek email ya')
                }
              })

               
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