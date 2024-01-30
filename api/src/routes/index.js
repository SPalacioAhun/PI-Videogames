const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const videogames = require('../controllers/videogames');
const {getVideogameById} = require('../controllers/getVideogameById');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', videogames)
router.get('/:idVideogame', getVideogameById)

module.exports = router;
