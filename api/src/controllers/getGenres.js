

const axios = require('axios');
const { Genre } = require('../db'); // Asegúrate de tener una importación correcta del modelo Genre
require('dotenv').config();
const {RAWG_API_KEY} = process.env

const getGenres = async (req, res) => {
  try {
    // Verifica si hay géneros en la base de datos
    const genresInDatabase = await Genre.findAll();
    console.log(genresInDatabase);
    if (genresInDatabase.length === 0) {
      // Si no hay géneros en la base de datos, obtén los géneros de la API y guárdalos
      
      const apiResponse = await axios.get(`https://api.rawg.io/api/genres?key=${RAWG_API_KEY}`);
      console.log(apiResponse);
      const genresFromApi = apiResponse.data.results;

      // Guarda los géneros en la base de datos
      await Genre.bulkCreate(genresFromApi);

      // Vuelve a obtener los géneros desde la base de datos
      const genres = await Genre.findAll();

      return res.json({ genres });
    }

    // Si ya hay géneros en la base de datos, simplemente devuélvelos
    return res.json({ genres: genresInDatabase });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getGenres,
};


