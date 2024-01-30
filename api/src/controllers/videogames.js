// const { Videogame } = require('../db');
// const { getDataApi } = require('../utils/getDataApi');

// const videogames = async(req, res) => {
//     try {
//         // Obtener datos de la API
//         const apiData = await getDataApi();

//         // Obtener datos de la base de datos
//         const dbData = await Videogame.findAll({
//             attributes: ['id', 'name', 'releaseDate', 'rating'],
//             // otras opciones de Sequelize para filtros u ordenamientos aquí
//         });

//         // Combinar datos de la API y de la base de datos
//         const allVideogames = [...apiData, ...dbData];

//         res.json(allVideogames);
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// }

// module.exports = videogames;


const { Videogame } = require('../db');
const { getDataApi } = require('../helper/getDataApi');

const videogames = async (req, res) => {
    try {
        // Obtener datos de la API
        const apiData = await getDataApi();

        // Obtener datos de la base de datos
        const dbData = await Videogame.findAll({
            attributes: ['id', 'name', 'releaseDate', 'rating'],
            // otras opciones de Sequelize para filtros u ordenamientos aquí
        });

        // Filtrar duplicados por ID
        const uniqueApiData = apiData.filter(apiGame => !dbData.some(dbGame => dbGame.id === apiGame.id));

        // Combinar datos de la API y de la base de datos
        const allVideogames = [...uniqueApiData, ...dbData];

        res.json(allVideogames);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = videogames;
