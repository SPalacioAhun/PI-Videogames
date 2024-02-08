
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
    
    import style from '../card/card.module.css'
    import React from "react";
    import { useNavigate } from "react-router-dom";
    
    const Card = ({ id, name, image, userCreated, genres, rating }) => {
      const navigate = useNavigate();
      const handleClick = () => {
        navigate(`/home/${id}`);
      };
    
      return (
        <div className={style.card} onClick={handleClick}>
          <div>
            <img className={style.card_image} src={image} alt={name} width="150px" />
          </div>
          <h2>{name}</h2>
          <div>
            <h3>Genres</h3>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Rating</h3>
            <p>{rating}</p>
          </div>
          {userCreated ? <button>borrar</button> : null}
        </div>
      );
    };
    
    export default Card;
    

