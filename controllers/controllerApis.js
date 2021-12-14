require("dotenv").config();
const axios = require("axios");
const rajaOngkirEndpoint = `https://api.rajaongkir.com/starter`;
const rajaOngkirHeaders = {
  headers: {
    key: process.env.RAJA_ONGKIR_API,
  },
};

class ControllerApis {
  static async cities(req, res, next) {
    try {
      const url = `${rajaOngkirEndpoint}/city`;

      const response = await axios.get(url, rajaOngkirHeaders);
      const cities = response.data.rajaongkir.results;

      res.status(200).json(cities);
    } catch (err) {
      next(err);
    }
  }

  static async shipping(req, res, next) {
    try {
      const { origin, destination, weight, courier } = req.body;

      // Error Handling
      if (!origin) throw { name: `emptyOrigin` };
      else if (!destination) throw { name: `emptyDestination` };
      else if (!weight) throw { name: `emptyWeight` };
      else if (!courier) throw { name: `emptyCourier` };

      const url = `${rajaOngkirEndpoint}/cost`;
      const data = { origin, destination, weight, courier };

      const response = await axios.post(url, data, rajaOngkirHeaders);
      const shipping = response.data.rajaongkir;

      res.status(200).json({ shipping });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ControllerApis;
