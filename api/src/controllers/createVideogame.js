 //const { Videogame } = require('../db');

// const createVideogame = async (req, res) => {
//     console.log(req.body);
//     const {
//         nombre,
//         imagen,
//         descripcion,
//         plataformas,
//         fecha_de_lanzamiento,
//         rating,
//         genres,
//     } = req.body;

//     try {
//         // Crear el videojuego en la base de datos
//         const newVideogame = await Videogame.create({
//             nombre,
//             imagen,
//             descripcion,
//             plataformas,
//             fecha_de_lanzamiento,
//             rating,
//         });

//         // Relacionar el videojuego con los géneros indicados
//         if (genres && genres.length > 0) {
//             const genresInDB = await Genre.findAll({
//                 where: { name: genres },
//             });
//             await newVideogame.addGenres(genresInDB);
//         }

//         res.status(201).json(newVideogame);
//     } catch (error) {
//         console.error('Error al crear el videojuego: ', error);
//         res.status(500).send('Error interno del servidor');
//     }
// };

//module.exports = {createVideogame};

//const { Videogame } = require("../DB_connection");

const { Op } = require('sequelize');
const { Videogame, Genre } = require('../db');

const createVideogame = async (req, res) => {
  try {
    const { name, description, platforms, image, releaseDate, rating, genres } = req.body;

    // Validación de datos (puedes agregar más validaciones según tus necesidades)
    if (!name || !description || !platforms || !releaseDate || !rating || !genres || genres.length === 0) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios, y al menos un género debe ser proporcionado.' });
    }

    // Crear el videojuego en la base de datos
    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating,
    });

    // Obtén solo los nombres de los géneros del array de objetos
    const genreNames = genres.map((genre) => genre.name);

    // Asociar el videojuego con los géneros proporcionados
    const genresInDatabase = await Genre.findAll({
      where: {
        name: {
          [Op.in]: genreNames,
        },
      },
    });

    await newVideogame.addGenres(genresInDatabase);

    res.status(201).json(newVideogame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  createVideogame,
};
