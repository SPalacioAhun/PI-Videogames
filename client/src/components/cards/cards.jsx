 import style from '../cards/cards.module.css'

// import Card from "../card/card";

// function Cards() {
//     return (
//       <div className={style.container}>
      
//         <Card />
//         <Card />
//         <Card />
        


//       </div>
//     );
//   }
  
//   export default Cards;

import React from "react";
import Card from "../card/card";
import { useSelector } from "react-redux";

const Cards = () => {
  const showedGames = useSelector((state) => state.showedGames);

  //esto de aca abajo va a cambiar con el paginado
  const cards = showedGames.map((game) => {
    return <Card key={game.id} {...game} />;
  });

  return <div className={style.container}>{cards}</div>;
};

export default Cards;
