const { Movie } = require("../models");

class MovieController {
  static async getMovies(req, res, next) {
    try {
      const movies = await Movie.findAll({
        attributes: { exclude: ["updatedAt", "createdAt"] },
      });
      res.status(200).json(movies);
    } catch (err) {
      next(err); //pass error to express
    }
  }

  static async getByPk(req, res, next) {
    try {
      const id = +req.params.mid;
      const movies = await Movie.findOne({
        where: id,
        attributes: { exclude: ["updatedAt", "createdAt"] },
      });
      res.status(200).json(movies);
    } catch (err) {
      next(err); //pass error to express
    }
  }
}
module.exports = MovieController;
