const footballAxios = require('../apis/footballAPI')

class Controller {
        static async getStandings(req, res, next) {
            try {
                const standingTable = await footballAxios({
                    method: 'GET',
                    url: '/standings?league=39&season=2021',
                    headers: {
                    'x-rapidapi-host': 'v3.football.api-sports.io',
                    'x-rapidapi-key': process.env.FOOTBALL_KEY
                    }
                })
                
                res.status(200).json(standingTable.data.response[0].league.standings[0])
            } catch (err) {
                console.log(err);
                next(err);
            }
        }

        static async getClubs(req, res, next) {
            try {
                let {id} = req.query

                const clubInfo = await footballAxios({
                    method: 'GET',
                    url: `/teams?id=${id}`,
                    headers: {
                    'x-rapidapi-host': 'v3.football.api-sports.io',
                    'x-rapidapi-key': process.env.FOOTBALL_KEY
                    }
                })
                
                res.status(200).json(clubInfo.data.response)
            } catch (err) {
                console.log(err);
                next(err);
            }
        }
}

module.exports = Controller