const route = require(`express`).Router();

// const multer = require('multer');
// const path = require(`path`)
// const upload = multer({
//     limits: { 
//         fileSize: 255000
//     },
//     fileFilter: async (req, file, cb) => {
//         let fileExtention = path.extname(file.originalname)

//         if (fileExtention !== `.jpg` && fileExtention !== `.png` && fileExtention !== `.jpeg` && fileExtention !== `.svg` && fileExtention !== `.WebP` && fileExtention !== `.TIFF` && fileExtention !== `.BMP`) {
//             return cb( { status: 400, msg: `Please Upload with the right extention` } )
//         } else {
//             cb(null, true)
//         }
//     }
// });

// const { register, login } = require(`../controllers/adminController`);
// const { customerRegister, customerLogin } = require(`../controllers/customerController`);
// const { googleAuth } = require(`../controllers/auths`);
// const { authentication, authorization, slideUrl } = require("../middleware/middleware");
const { register, login, fetchAllProducts } = require('../controllers/userController');
const { adminRegister, adminLogin } = require('../controllers/adminController');
const errorsLog  = require("../middlewere/errorHandler");
//customer
route.post('/register', register);
route.post('/login', login);
route.get('/products', fetchAllProducts);
// route.get('/order', fetchOrderProduct);

//admin
route.post('/cms/register', adminRegister);
route.post('/cms/login', adminLogin);

// ===CUSTOMER======

// Login & Register
// route.post(`/register`, customerRegister);
// route.post(`/login`, customerLogin);
// route.post(`/googleVer`, googleAuth);

// Movies
// route.get(`/mov/movies`, activeMovie);

// Favorite Movie
// route.get(`/mov/favMovie`, [authentication] , favoriteMovies);
// route.post(`/mov/favMovie/:movId`, [authentication] , addFavMovie);
// route.delete(`/mov/favMovie/:movId`,[authentication], deleteFavMovie);
// route.get(`/mov/movies/:id`, detailMovie);


// === END CUSTOMER======


// ===ADMIN & STAFF======

// route.get(`/`, Controller.homepage);

// route.post(`/cms/login`, login);
// route.post(`/register`, register);

// route.post(`/googleVer`, googleAuth);

// route.get(`/genre`, [authentication , authorization], findAllGenre);
// route.get(`/movies`,[authentication , authorization], findAllMovie);
// route.get(`/logs`,[authentication , authorization], findAllLogs);

// route.post(`/genre`, [authentication , authorization], addGenre);
// route.post(`/movies`, authentication , authorization , upload.single('img'), slideUrl, addMovies);

// route.get(`/genre/:id`,[authentication , authorization], findGenreId);
// route.get(`/movies/:id`,[authentication , authorization], findMovieId);
// route.put(`/movies/:id`, [authentication , authorization],upload.single('img'), slideUrl, updateMovie);
// route.delete(`/movies/:id`,[authentication , authorization], deleteMovie);
// route.patch(`/movies/:id`,[authentication , authorization], patchMovie);

// === END ADMIN & STAFF======



route.use(errorsLog);

module.exports = route

