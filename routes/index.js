const router = require('express').Router();
const errorHandler = require('../middlewares/errorHandler.js');

const UserController = require('../controllers/UserController.js');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.get('/boards', (req, res) => res.send(`Get boards`));

router.use(errorHandler);

module.exports = router;