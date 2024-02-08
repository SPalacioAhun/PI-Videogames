// detail.jsx

// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loadGameById } from "../../redux/actions";

// function Detail() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const game = useSelector((state) => state.gameById);

//   useEffect(() => {
//     dispatch(loadGameById(id));
//   }, [dispatch, id]);

//   return (
//     <div className="App">
//       <h1>Detalles del Juego</h1>
//       {game && (
//         <div>
//           <h2>{game.name}</h2>
//           <p>ID: {game.id}</p>
//           <p>Plataformas: {game.platforms.join(", ")}</p>
//           <p>Descripción: {game.description}</p>
//           <p>Fecha de Lanzamiento: {game.releaseDate}</p>
//           <p>Rating: {game.rating}</p>
//           <p>Géneros: {game.genres.map((genre) => genre.name).join(", ")}</p>
//           {/* Agrega más detalles según tus necesidades */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Detail;
//!----------------
//*original

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadGameById } from "../../redux/actions";
import style from '../detail/detail.module.css'

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameById);

  useEffect(() => {
    dispatch(loadGameById(id));
  }, [dispatch, id]);

  return (
    <div className={style.detail}>
      <h1>Detalles del Juego</h1>
      {game && (
        <div>
          <h2>{game.nombre}</h2>
          <p>ID: {game.id}</p>
          <p>Plataformas: {game.plataformas.join(", ")}</p>
          <div dangerouslySetInnerHTML={{ __html: game.descripcion }} />
          <p>Fecha de Lanzamiento: {game.fecha_de_lanzamiento}</p>
          <p>Rating: {game.rating}</p>
          <p>Géneros: {game.genres.map((genre) => genre.name).join(", ")}</p>
          <img src={game.imagen} alt={game.nombre} />
          
          {/* Botón para volver a la página principal */}
          <Link to="/home">
            <button>Volver al Inicio</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Detail;

