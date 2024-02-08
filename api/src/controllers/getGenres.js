

const axios = require('axios');
const { Genre } = require('../db'); // Asegúrate de tener una importación correcta del modelo Genre
require('dotenv').config();
const {RAWG_API_KEY} = process.env

const getGenres = async (req, res) => {
  try {
    const genresInDatabase = await Genre.findAll();
    console.log(genresInDatabase);
    if (genresInDatabase.length === 0) {
      const apiResponse = await axios.get(`https://api.rawg.io/api/genres?key=${RAWG_API_KEY}`);
      console.log(apiResponse);
      const genresFromApi = apiResponse.data.results;

      await Genre.bulkCreate(genresFromApi);

      const genres = await Genre.findAll();

      // Envía los géneros como un array en lugar de un objeto
      return res.json(genres);
    }

    // Envía los géneros como un array en lugar de un objeto
    return res.json(genresInDatabase);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
  getGenres,
};


