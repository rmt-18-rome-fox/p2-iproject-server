const { Character } = require("../models");
class CharController {
  static async getCharacters(req, res, next) {
    try {
      const { id } = req.user;

      const characters = await Character.findAll({ where: { UserId: id }, attributes: { exclude: ["createdAt", "updatedAt"] } });
      res.status(200).json(characters);
    } catch (err) {
      next(err);
    }
  }
  static async addCharacter(req, res, next) {
    try {
      const UserId = req.user.id;
      const { name, race, spell, className, imageUrl, gender } = req.body;
      const payload = {
        name: name,
        gender: gender,
        race: race,
        className: className,
        spell: spell,
        imageUrl: imageUrl,
        UserId: UserId,
      };
      const newCharacter = await Character.create(payload);
      res.status(201).json(newCharacter);
    } catch (err) {
      next(err);
    }
  }
  static async deleteChar(req, res, next) {
    try {
      const { id } = req.params;
      await Character.destroy({ where: { id } });
      res.status(200).json({ message: `Character ${req.character.name} successfully deleted` });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = CharController;
