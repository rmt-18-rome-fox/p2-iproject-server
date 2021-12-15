const organizaiton = require('express').Router()
const OrganizationController = require('../controller/OrganizationController')

organizaiton.post('/', OrganizationController.postOrganization)
organizaiton.get('/', OrganizationController.getOrganization)
organizaiton.put('/update/:id', OrganizationController.putOrganization)
organizaiton.delete('/delete/:id', OrganizationController.deleteOrganization)

module.exports = organizaiton