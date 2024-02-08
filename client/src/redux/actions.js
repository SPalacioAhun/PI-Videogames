import {
    LOAD_GAMES,
    FILTER,
    ORDER,
    LOAD_GENRES,
    SEARCH_BY_NAME,
    LOAD_GAME_BY_ID,
    SET_MODAL,
  } from "./actionTypes";
  import axios from "axios";
  
  const loadGames = () => {
    const endpoint = "http://localhost:3001/videogames";
    return async (dispatch) => {
      try {
        const { data } = await axios(endpoint);
        return dispatch({ type: LOAD_GAMES, payload: data });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  // const loadGames = () => {
  //   const endpoint = "http://localhost:3001/videogames";
  //   return async (dispatch) => {
  //     try {
  //       const { data } = await axios(endpoint);
        
  //       // Extraer los géneros únicos de los juegos obtenidos
  //       const genres = [...new Set(data.map(game => game.genre))];
  
  //       // Despachar tanto los juegos como los géneros
  //       dispatch({ type: LOAD_GAMES, payload: data });
  //       dispatch({ type: LOAD_GENRES, payload: genres });
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  // };
  
  const filterGames = (genre, userCreated) => {
    return {
      type: FILTER,
      payload: { genre, userCreated },
    };
  };
  
 
const orderGames = ({ criteria, order }) => {
  return {
    type: ORDER,
    payload: { criteria, order },
  };
};
  
  const loadGenres = () => {
    const endpoint = "http://localhost:3001/genres";
    return async (dispatch) => {
      try {
        const { data } = await axios(endpoint);
        return dispatch({ type: LOAD_GENRES, payload: data });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  
  
  


    const loadGameById = (id) => {
      const endpoint = `http://localhost:3001/videogames/${id}`; // Cambia la ruta según tu API
      return async (dispatch) => {
        try {
          const { data } = await axios(endpoint);
          return dispatch({ type: LOAD_GAME_BY_ID, payload: data });
        } catch (error) {
          console.log(error.message);
        }
      };
    };

    const searchByName = (name) => {
      const endpoint = `http://localhost:3001/videogames/name?name=${name}`;
    
      return async (dispatch) => {
        try {
          const { data } = await axios(endpoint);
          return dispatch({ type: SEARCH_BY_NAME, payload: data });
        } catch (error) {
          console.log(error.message);
        }
      };
    };

    const setModal = ({ show, message, type }) => {
      return {
        type: SET_MODAL,
        payload: { show, message, type },
      };
    };

    // export const loadFilteredGames = (genre) => {
    //   return async (dispatch) => {
    //     try {
    //       const response = await axios.get(`http://localhost:3001/games?genre=${genre}`);
    //       dispatch({ type: 'LOAD_GAMES', payload: response.data });
    //     } catch (error) {
    //       console.error('Error loading filtered games:', error);
    //     }
    //   };
    // };

    // export const filterGamesByGenre = (genre) => ({
    //   type: 'FILTER_GAMES_BY_GENRE',
    //   payload: genre
    // });

    
  
  //falta paginado
  
  export { 
    loadGames, 
    filterGames, 
    orderGames, 
    loadGenres, 
    searchByName, 
    loadGameById,
    setModal,
    
    
  };
  

//!..........................................


// import {
//   LOAD_GAMES,
//   FILTER,
//   ORDER,
//   LOAD_GENRES,
//   SEARCH_BY_NAME,
//   SET_MODAL,
//   LOAD_GAME_BY_ID,
// } from "./actionTypes";
// import axios from "axios";

// const loadGames = () => {
//   const endpoint = "http://localhost:3001/videogames";
//   return async (dispatch) => {
//     try {
//       const { data } = await axios(endpoint);
//       return dispatch({ type: LOAD_GAMES, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

// const filterGames = ({ genre, userCreated }) => {
//   return {
//     type: FILTER,
//     payload: { genre, userCreated },
//   };
// };

// const orderGames = ({ criteria, order }) => {
//   return {
//     type: ORDER,
//     payload: { criteria, order },
//   };
// };

// const loadGenres = () => {
//   const endpoint = "http://localhost:3001/genres";
//   return async (dispatch) => {
//     try {
//       const { data } = await axios(endpoint);
//       return dispatch({ type: LOAD_GENRES, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

// const searchByName = (name) => {
//   const endpoint = "http://localhost:3001/videogames";
//   return (dispatch) => {
//     axios(`${endpoint}?name=${name}`)
//       .then(({ data }) => {
//         console.log(data);
//         return dispatch({ type: SEARCH_BY_NAME, payload: data });
//       })
//       .catch((error) => {
//         dispatch(
//           setModal({ show: true, type: "error", message: error.response.data })
//         );
//         setTimeout(() => {
//           dispatch(setModal({ show: false }));
//         }, 2000);
//         // console.log(error.response.data);
//       });
//   };
// };

// const setModal = ({ show, message, type }) => {
//   return {
//     type: SET_MODAL,
//     payload: { show, message, type },
//   };
// };

// const loadGameById = (id) => {
//         const endpoint = `http://localhost:3001/videogames/${id}`; // Cambia la ruta según tu API
//         return async (dispatch) => {
//           try {
//             const { data } = await axios(endpoint);
//             return dispatch({ type: LOAD_GAME_BY_ID, payload: data });
//           } catch (error) {
//             console.log(error.message);
//           }
//         };
//       };

// export {
//   loadGames,
//   filterGames,
//   orderGames,
//   loadGenres,
//   searchByName,
//   setModal,
//   loadGameById,
// };
