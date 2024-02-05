 import style from '../card/card.module.css'

// function Card() {
//     return (
//       <div className={style.container}>
//         <h2 className={style.titulo}>Name</h2>
//         <h2 className={style.titulo}>genre</h2> 
//         <img src="" alt="" />
        
//       </div>
//     );
//   }
  
//   export default Card;

import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, image, userCreated, genres }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/home/${id}`);
  };
  //No olvidar la funcion de borrado de juego
  return (
    <div className={style.container} onClick={handleClick}>

      <div>
        <img src={image} alt={name} width="150px" />
      </div>
      <h2>{name}</h2>
      <div>
        <h3>Genres</h3>
        <ul>
          {genres.map((genre) => (
            <li  key={genre.name}>{genre.name}</li>
          ))}
        </ul>
      </div>

      {userCreated ? <button>borrar</button> : null}
    </div>
  );
};

export default Card;
