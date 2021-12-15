const { Organization } = require('../models')

class OrganizationController {
  static async postOrganization (req, res, next) {
    const {
      name,
      description,
      isPaid,
      price
    } = req.body
    
    try {
      const organization = await Organization.create({
        name, 
        description,
        isPaid,
        price,
        UserId: req.auth.id
      })

      res.status(201).json({
        message: `Your organization already created`,
        organization
      })
    } catch (error) {
      next(error)
    }
  }
  static async getOrganization (req, res, next) {
    try {
      const data = await Organization.findAll({
        where: {
          UserId: req.auth.id
        }
      })

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async putOrganization (req, res, next) {}
  static async deleteOrganization (req, res, next) {}
}

module.exports = OrganizationController