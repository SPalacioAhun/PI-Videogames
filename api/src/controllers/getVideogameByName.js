require('dotenv').config();
const axios = require('axios');
const { RAWG_API_KEY } = process.env;
const { Videogame, Genre } = require('../db');
const { Op } = require('sequelize');

const URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;

const getVideoGameByName = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
    if (!name) {
      return res.status(400).json({ error: 'Debe ingresar un nombre para buscar el Videogame' });
    }

    const formattedName = name.toLowerCase();

    // Búsqueda en la API
    const apiResponse = await axios.get(`${URL}&search=${encodeURIComponent(formattedName)}&search_precise=true&page_size=15`);
    const apiGames = apiResponse.data.results.map(game => ({
      id: game.id,
      name: game.name,
      description: game.description,
      platforms: game.platforms,
      image: game.background_image,
      released: game.released,
      rating: game.rating,
      genres: game.genres,
      source: 'API',
    }));

    // Búsqueda en la BD
    const dbGames = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${formattedName}%`
        }
      },
      limit: 15,
      include: [Genre],
    });

    if (!apiGames.length && !dbGames.length) {
      return res.status(404).json({ message: 'No se encontró este VideoGame' });
    }

    const result = [...apiGames, ...dbGames];
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocurrió un error en el servidor' });
  }
};

module.exports = getVideoGameByName;
