const organizaiton = require('express').Router()
const OrganizationController = require('../controller/OrganizationController')
const { organizationAuthor } = require('../middleware/authorization')

organizaiton.post('/', OrganizationController.postOrganization)
organizaiton.get('/', OrganizationController.getOrganization)
organizaiton.put('/update/:id', 
  organizationAuthor,
  OrganizationController.putOrganization
)
organizaiton.delete('/delete/:id', 
  organizationAuthor,  
  OrganizationController.deleteOrganization
)

module.exports = organizaiton