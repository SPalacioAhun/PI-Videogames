const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const videogames = require('../controllers/videogames');
const {getVideogameById} = require('../controllers/getVideogameById');
const getVideogameByName = require('../controllers/getVideogameByName');
const {createVideogame} = require('../controllers/createVideogame');
const {getGenres} = require('../controllers/getGenres')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/genres", getGenres);
router.get('/videogames/name', getVideogameByName);
router.get('/videogames', videogames);
router.get('/videogames/:idVideogame', getVideogameById);
router.post('/videogames', createVideogame);

module.exports = router;
