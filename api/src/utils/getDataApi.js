const axios = require('axios');
require('dotenv').config();

const { RAWG_API_KEY } = process.env;

const getDataApi = async () => {
    try {
        const limitPerPage = 20;
        const totalGames = 100; // Establecer el número total de juegos que deseas obtener.
        const numPages = Math.ceil(totalGames / limitPerPage);
        const allGamesDetails = [];

        for (let page = 1; page <= numPages; page++) {
            const URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&page=${page}`;
            
            const apiGames = await axios.get(URL);
            const gamesList = apiGames.data.results;

            const gamePromises = gamesList.map(async (game) => {
                const genres = game.genres.map(genre => ({ name: genre.name }));
                
                return {
                    id: game.id,
                    name: game.name,             
                    image: game.background_image,
                    genres,
                    rating: game.rating
                };
            });

            const gameDetails = await Promise.all(gamePromises);
            allGamesDetails.push(...gameDetails);
        }

        return allGamesDetails;
    } catch (error) {
        console.error('Error obteniendo datos de la API de RAWG: ', error);
        throw error;
    }
};

module.exports = {
    getDataApi
};
