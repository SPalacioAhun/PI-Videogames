// controllers/videogameController.js
const axios = require('axios');
const { Videogame } = require('../db');

const {RAWG_API_KEY} = process.env

function esUUID(id) {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(id);
  }

const getVideogameById = async (req, res) => {
    const { idVideogame } = req.params;

    try {
        if (esUUID(idVideogame)) {
            let dataDb = await Videogame.findByPk(idVideogame, {
                include: Genres
            });

            if (dataDb) {
                return res.json({
                    id: dataDb.id,
                    nombre: dataDb.nombre,
                    descripcion: dataDb.descripcion,
                    plataformas: dataDb.plataformas,
                    imagen: dataDb.imagen,
                    fecha_de_lanzamiento: dataDb.fecha_de_lanzamiento,
                    rating: dataDb.rating
                });
            } else {
                return res.status(404).send('No se encuentra videogames con ese id');
            }
        } else {
         
            
            const URL = `https://api.rawg.io/api/games/${idVideogame}?key=${RAWG_API_KEY}`;
            
            const apiResponse = await axios.get(URL);
            const gameDetails = apiResponse.data;

            // Extraer la información necesaria de la API
            const response = {
                id: gameDetails.id,
                nombre: gameDetails.name,
                descripcion: gameDetails.description,
                plataformas: gameDetails.platforms.map(p => p.platform.name),
                imagen: gameDetails.background_image,
                fecha_de_lanzamiento: gameDetails.released,
                rating: gameDetails.rating,
                genres: gameDetails.genres.map(genre => ({ name: genre.name }))
            };

            return res.json(response);
        }
    } catch (error) {
        console.error('Error ', error);
        return res.status(500).send('Error interno del servidor');
    }
};

module.exports = {
  getVideogameById,
};


