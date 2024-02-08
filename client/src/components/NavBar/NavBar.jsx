import { useState } from "react";
import SearchBar from "../searchbar/searchbar";
import FilterGenre from "../FilterGenre/FilterGenre";
import FilterOrder from "../FilterOrder/FilterOrder";
import { useDispatch, useSelector } from "react-redux";
import { filterGames, orderGames } from "../../redux/actions";
import styles from "./NavBar.module.css";

const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const showedGames = useSelector((state) => state.showedGames);
  const dispatch = useDispatch();
  // Estados y funciones relacionados con los filtros
  const initialFilters = { genre: "All", userCreated: "All" };
  const [filters, setFilters] = useState(initialFilters);

  const resetFilters = () => {
    setFilters(initialFilters);
  };
  const handleFiltersChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
    dispatch(
      filterGames({ ...filters, [event.target.name]: event.target.value })
    );
    applyOrder();
  };

  // Estados y funciones relacionados con el ordenamiento
  const initialOrder = {
    criteria: "name",
    order: "ASC",
  };
  const [order, setOrder] = useState(initialOrder);

  const applyOrder = () => {
    dispatch(orderGames(order));
  };

  const resetOrder = () => {
    setOrder(initialOrder);
  };

  const handleOrderChange = (event) => {
    if (event.target.name === "criteria") {
      setOrder({ ...order, [event.target.name]: event.target.value });
      dispatch(
        orderGames({ ...order, [event.target.name]: event.target.value })
      );
    }
    if (event.target.name === "order") {
      // console.log(typeof event.target.value);
      const way = event.target.value === "0" ? "ASC" : "DES";
      setOrder({ ...order, [event.target.name]: way });
      dispatch(orderGames({ ...order, [event.target.name]: way }));
    }
    return;
  };

  return (
    <div className={styles.navBar}>
      <FilterGenre filters={filters} handleFiltersChange={handleFiltersChange} />
      <FilterOrder order={order} handleOrderChange={handleOrderChange} />
      <SearchBar resetFilters={resetFilters} resetOrder={resetOrder} />
    </div>
  );
};

export default NavBar;
