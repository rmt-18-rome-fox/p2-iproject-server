const axios = require('axios')


class ApiController {
    static async mapbox (req, res, next) {
        try {
            let { originQuery, destQuery } = req.body
            originQuery = originQuery[0]
            destQuery = destQuery[0]
            console.log({originQuery, destQuery}, '<<<<<<<<<<< BARU')
            // console.log(originQuery, destQuery)
            const path = `https://api.mapbox.com/directions/v5/mapbox/driving/${originQuery[0]}%2C${originQuery[1]}%3B${destQuery[0]}%2C${destQuery[1]}?alternatives=true&continue_straight=true&geometries=geojson&overview=simplified&steps=false&access_token=pk.eyJ1IjoiaWh6YW5hbnRhbWEiLCJhIjoiY2t4NW02Y3B3MDNhajJ2bzNtZzllcmhyYiJ9.keA6mU1OUSS8JqO9U9n8hg`;
            const carbon_interface_token = "bT4U08ocSLa5cd6Qp6nnA";
            axios({
                method: "GET",
                url: path,
                headers: {
                  Authorization: `Bearer ${carbon_interface_token}`,
                },
             })
             .then(({ data }) => {
                let distance = data.routes[0].distance / 1000;
                const origin = data.routes[0].legs[0].summary.split(',')[0]
                const destination = data.routes[0].legs[0].summary.split(',')[1]
                const payload = {
                    distance,
                    origin,
                    destination
                }
                res.status(200).json(payload)
             })
             .catch((err) => {
                console.log(err)
                throw {name: 'mapboxFailed'}
             })
        } catch (err) {
            next(err)
        }
    }

    static async carbonInterface (req, res, next) {
        try {
            const { weight, distance } = req.body
            const path = `https://www.carboninterface.com/api/v1/estimates`;
            const token = 'bT4U08ocSLa5cd6Qp6nnA'
            const payload = {
                type: "shipping",
                weight_value: weight,
                weight_unit: "kg",
                distance_value: distance,
                distance_unit: "km",
                transport_method: distance > 1000 ? "plane" : "truck",
            };

            axios({
                method: "POST",
                url: path,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                data: {
                  ...payload,
                },
            })
            .then(({data}) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                console.log(err.response.data.message)
                if (err.response.data.message === 'Your account has hit its monthly API request limit. Please upgrade to make more requests.') {
                    res.status(500).json({message: err.response.data.message })
                }
                throw {name: 'getCarbonFootprintFail'}
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ApiController