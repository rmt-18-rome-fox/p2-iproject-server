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

router.post('/portofolio/add', upload.single('file'), imageValidation, imageKit, ArchitectController.addPortofolio)
router.get('/portofolio/:portofolioId', ArchitectController.getEditPortofolioForm)
router.put('/portofolio/:portofolioId', upload.single('file'), imageValidation, imageKit, ArchitectController.editPortofolio)
router.get('/profile', ArchitectController.getArchitectProfile)
router.put('/profile', upload.single('file'), imageValidation, imageKit, ArchitectController.editProfile)

module.exports = router