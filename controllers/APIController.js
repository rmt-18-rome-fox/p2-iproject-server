const axios = require("axios");
const baseUrl = "https://www.dnd5eapi.co/api";
const imgSearch = "https://imsea.herokuapp.com/api/1?q=";
class APIController {
  static async getClasses(req, res, next) {
    try {
      const { data } = await axios({
        method: "get",
        url: `${baseUrl}/classes`,
      });
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }
  static async getRaces(req, res, next) {
    try {
      const { data } = await axios({
        method: "get",
        url: `${baseUrl}/races`,
      });
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }
  static async getSpells(req, res, next) {
    try {
      const { data } = await axios({
        method: "get",
        url: `${baseUrl}/spells`,
      });
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }
  static async getImages(req, res, next) {
    const { q } = req.query;
    try {
      const { data } = await axios({
        method: "get",
        url: `${imgSearch}${q}`,
      });
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = APIController;
