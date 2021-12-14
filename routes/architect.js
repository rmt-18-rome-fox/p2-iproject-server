const ArchitectController = require('../controllers/ArchitectController')
const {imageValidation} = require('../middlewares/imageValidation') //middleware
const {imageKit} = require('../middlewares/imageKit')
const {architectAuthorization} = require('../middlewares/authorization')
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
});

const router = require('express').Router()

router.post('/portofolio/add', architectAuthorization, upload.single('file'), imageValidation, imageKit, ArchitectController.addPortofolio)
router.get('/portofolio/:portofolioId', architectAuthorization, ArchitectController.getEditPortofolioForm)
router.put('/portofolio/:portofolioId', architectAuthorization, upload.single('file'), imageValidation, imageKit, ArchitectController.editPortofolio)
router.get('/profile', architectAuthorization, ArchitectController.getArchitectProfile)
router.put('/profile', architectAuthorization, upload.single('file'), imageValidation, imageKit, ArchitectController.editProfile)

module.exports = router