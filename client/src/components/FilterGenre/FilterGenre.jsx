// import { useSelector } from "react-redux";

// const SearchGenre = ({ filters, handleFiltersChange }) => {
//   const genres = useSelector((state) => {
//     console.log("State in SearchGenre component:", state);
//     return state.genres;
//   });

//   console.log("Genres in SearchGenre component:", genres);

//   return (
//     <div>
//       <div>Filter by:</div>
//       <div>
//         <label>Genre: </label>
//         <select
//           name="genre"
//           onChange={handleFiltersChange}
//           value={filters ? filters.genre : "All"}
//         >
//           <option value="All">All</option>
//           {genres && genres.map((genre) => (
//             <option key={genre.id} value={genre.id}>{genre.name}</option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label>From DB or API: </label>
//         <select
//           name="userCreated"
//           onChange={handleFiltersChange}
//           value={filters ? filters.userCreated : "All"}
//         >
//           <option value="All">All</option>
//           <option value={1}>From DB</option>
//           <option value={0}>From API</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SearchGenre;

// import React from 'react'
// import style from '../searchGenre/searchGenre.module.css';
// import { useState } from 'react';

// function searchGenre() {
//     const [ aux, setAux ] = useState(false);
//   return (
//     <div className={style.container}>
        // <div>
        //     <select>
        //         <option value="Action">Action</option>
        //         <option value="Indie">Indie</option>
        //         <option value="Adventure">Adventure</option>
        //         <option value="RPG">RPG</option>
        //         <option value="Strategy">Strategy</option>
        //         <option value="Shooter">Shooter</option>
        //         <option value="Casual">Casual</option>
        //         <option value="Simulation">Simulation</option>
        //         <option value="Puzzle">Puzzle</option>
        //         <option value="Arcade">Arcade</option>
        //         <option value="Platformer">Platformer</option>
        //         <option value="Racing">Racing</option>
        //         <option value="Massively Multiplayer">Massively Multiplayer</option>
        //         <option value="Sports">Sports</option>
        //         <option value="Fighting">Fighting</option>
        //         <option value="Family">Family</option>
        //         <option value="Board Games">Board Games</option>
        //         <option value="Educational">Educational</option>
        //         <option value="Card">Card</option>
        //     </select>
        // </div>
//     </div>
//   )
// }

// export default searchGenre

// import { useSelector } from "react-redux";
// import styles from "../searchGenre/searchGenre.module.css";

// const SearchGenre = ({ filters, handleFiltersChange }) => {
//   const genres = useSelector((state) => state.genres);

//   return (
//     <div>
//       <div className={styles.divTitle}>Filter by:</div>
//       <div className={styles.divFilters}>
//         <label>Genre: </label>
//         <select
//           name="genre"
//           onChange={handleFiltersChange}
//           value={filters.genre}
//           className={styles.selectFilters}
//         >
//           <option value="All">All</option>
//           {genres.map((genre) => (
//             <option value={genre.id}>{genre.name}</option>
//           ))}
//         </select>
//       </div>
//       <div className={styles.divFilters}>
//         <label>From DB or API: </label>
//         <select
//           name="userCreated"
//           onChange={handleFiltersChange}
//           value={filters.userCreated}
//           className={styles.selectFilters}
//         >
//           <option value="All">All</option>
//           <option value={1}>From DB</option>
//           <option value={0}>From API</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SearchGenre;

//!------------------------------------------------

// searchGenre.jsx

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { filterGames } from '../../redux/actions';

// const SearchGenre = () => {
//   const dispatch = useDispatch();
//   const genres = useSelector(state => state.genres);

//   const handleChange = (e) => {
//     const { value } = e.target;
//     dispatch(filterGames(value));
//   };

//   return (
//     <div className="search-genre">
//       <label htmlFor="genre-select">Filter by Genre:</label>
//       <select id="genre-select" onChange={handleChange}>
//         <option key="all" value="All">All</option>
//         {genres && genres.map(genre => (
//           <option key={genre?.id} value={genre?.id}>{genre?.name}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default SearchGenre;

//!-------------------------------------------------

import { useSelector } from "react-redux";
import styles from "../FilterGenre/FilterGenre.module.css";

const FilterGenre = ({ filters, handleFiltersChange }) => {
  const genres = useSelector((state) => state.genres);

  return (
    <div>
      <div>Filter by:</div>
      <div>
        <label>Genre: </label>
        <select
          name="genre"
          onChange={handleFiltersChange}
          value={filters.genre}
          className={styles.labelGenre}
        >
          <option value="All">All</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>From DB or API: </label>
        <select
          name="userCreated"
          onChange={handleFiltersChange}
          value={filters.userCreated}
          className={styles.labelGenre}
        >
          <option value="All">All</option>
          <option value={1}>From DB</option>
          <option value={0}>From API</option>
        </select>
      </div>
    </div>
  );
};

export default FilterGenre;


