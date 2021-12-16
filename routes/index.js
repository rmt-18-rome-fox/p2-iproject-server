const router = require('express').Router();
const errorHandler = require('../middlewares/errorHandler.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

const UserController = require('../controllers/UserController.js');
const NoteController = require('../controllers/NoteController.js');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/authGoogle', UserController.authGoogle);
router.post('/login/auth-github', UserController.authGithub);
// router.post('/auth-github', UserController.authGithub);

router.use(authentication);

router.get('/notes', NoteController.getNotes);
router.post('/notes', NoteController.postNote);
router.get('/notes/:id', NoteController.getNoteById);

router.delete('/notes/:id', authorization, NoteController.deleteNote);
router.put('/notes/:id', authorization, NoteController.putNote);
router.patch('/notes/:id', authorization, NoteController.patchNote);

router.use(errorHandler);

module.exports = router;