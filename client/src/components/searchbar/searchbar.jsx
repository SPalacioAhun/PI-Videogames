// import { useState } from 'react';
// import style from '../searchbar/searchbar.module.css';
// import { useDispatch } from 'react-redux';
// import { searchByName } from '../../redux/actions'; // Asegúrate de importar la acción adecuada

// function Searchbar() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const dispatch = useDispatch();

//   const handleSearch = (event) => {
//     event.preventDefault();
//     // Llamar a la acción searchByName con el término de búsqueda
//     dispatch(searchByName(searchTerm));
//   };

//   return (
//     <div className={style.container}>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Buscar por nombre"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit">Buscar</button>
//       </form>
//     </div>
//   );
// }

// export default Searchbar;

//!-----------------------------------


// import { useState } from 'react';
// import style from '../searchbar/searchbar.module.css';
// import { useDispatch } from 'react-redux';
// import { searchByName } from '../../redux/actions';

// function Searchbar() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const dispatch = useDispatch();

//   const handleSearch = (event) => {
//     event.preventDefault();
//     dispatch(searchByName(searchTerm));
//   };

//   const handleReload = () => {
//     window.location.reload();
//   };

//   return (
//     <div className={style.container}>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Buscar por nombre"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit">Buscar</button>
//       </form>
//       <button onClick={handleReload}>Recargar Página</button>
//     </div>
//   );
// }

// export default Searchbar;

//!---------------------------------------

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { searchByName, loadGames, setModal} from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import ModalDialog from "../ModalDialog/ModalDialog";
//import styles from "./SearchBox.module.css";

const SearchBar = ({ resetFilters, resetOrder }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const dialog = useSelector((state) => state.modalDialog);
  const handleChange = (event) => {
    setName(event.target.value);
    console.log("Nombre actual:", event.target.value);
  };

  const handleClick = () => {
    dispatch(searchByName(name));
    resetFilters();
    resetOrder();
    console.log("Nombre enviado:", name);
  };
  const handleResetClick = () => {
    dispatch(loadGames());
    resetFilters();
    resetOrder();
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Type the name of the game"
          value={name}
          onChange={handleChange}
          
        />
        <button
          disabled={name.length < 2}
          onClick={handleClick}
          
        >
          <span>Search</span>
        </button>
      </div>
      <div>
        <button onClick={handleResetClick}>
          <span>All Games</span>
        </button>
        <button
          onClick={() => {
            navigate("/addgame");
          }}
          
        >
          <span>Add Game to DB</span>
        </button>
      </div>
      <ModalDialog
        show={dialog.show}
        type={dialog.type}
        message={dialog.message}
      />
    </div>
  );
};

export default SearchBar;

//!-----------------------------------------------------

