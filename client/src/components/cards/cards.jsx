
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
  
// import React from "react";
 import style from '../cards/cards.module.css'
// import Card from "../card/card";
// import { useSelector } from "react-redux";
// import Pagination from "../pagination/pagination";

// const Cards = () => {
//   const showedGames = useSelector((state) => state.showedGames);

//   //esto de aca abajo va a cambiar con el paginado
//   const cards = showedGames.map((game) => {
//     return <Card key={game.id} {...game} />;
//   });

//   return (
//   <>
      
//    <div className={style.container}>
//       {cards}
//    </div>;
//    <Pagination />

//   </>
//   )
// };

// export default Cards;

import { useEffect, useState } from "react";
import Card from "../card/card";
import Pagination from "../pagination/pagination";
import { useSelector } from "react-redux";
//import styles from "./Cards.module.css";

const Cards = () => {
  const showedGames = useSelector((state) => state.showedGames);

  //Manejo del paginado
  const [currentPage, setCurrentPage] = useState(1);
  const GAMESXPAGE = 15;
  const LAST_PAGE = Math.ceil(showedGames.length / GAMESXPAGE);

  const handleClick = (event) => {
    switch (event.target.name) {
      case "first":
        setCurrentPage(1);
        break;
      case "prev":
        setCurrentPage(currentPage - 1);
        break;
      case "next":
        setCurrentPage(currentPage + 1);
        break;
      case "last":
        setCurrentPage(LAST_PAGE);
        break;
      default:
        setCurrentPage(parseInt(event.target.name));
        break;
    }
  };

  //Paginado
  const firsrItem = GAMESXPAGE * (currentPage - 1);
  const lastItem = firsrItem + GAMESXPAGE;
  const showedCards = showedGames.slice(firsrItem, lastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [showedGames]);

  return (
    <div>
      <div className={style.container}>
        {showedCards.map((game) => {
          return <Card {...game} key={game.id} />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        LAST_PAGE={LAST_PAGE}
        handleClick={handleClick}
      />
      
    </div>
  );
};

export default Cards;
