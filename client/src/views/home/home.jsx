import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from '../../redux/actions';
import Cards from '../../components/cards/cards';
import Searchbar from '../../components/searchbar/searchar';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Llamar a la acción loadGames cuando el componente Home se monta
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Estás en el Home</h1>
      <Searchbar />
      <Cards />
    </div>
  );
}

export default Home;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadGames } from '../../redux/actions';
// import Cards from '../../components/cards/cards';
// import Searchbar from '../../components/searchbar/searchar';

// function Home() {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const games = useSelector((state) => state.showedGames);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await dispatch(loadGames());
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching games', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <h1>Estás en el Home</h1>
//       <Searchbar />
//       {loading ? (
//         <p>Loading...</p> // Puedes reemplazar esto con un spinner más elaborado si lo deseas
//       ) : (
//         <Cards games={games} />
//       )}
//     </div>
//   );
// }

// export default Home;

