import style from '../pagination/pagination.module.css'

const Pagination = ({ currentPage, LAST_PAGE, handleClick }) => {
  const pages = Array.from(
    { length: LAST_PAGE },
    (element, index) => index + 1
  );
  return LAST_PAGE > 1 ? (
    <div className={style.pagination_container}>
      <button className={style.pagination_button} name="first" disabled={currentPage === 1} onClick={handleClick}>
        ◀◀
      </button>
      <button className={style.pagination_button} name="prev" disabled={currentPage - 1 < 1} onClick={handleClick}>
        ◀
      </button>
      {pages.map((page) => (
        <button
          key={page} // Agregamos la prop key con el valor de la página como clave única
          name={page}
          disabled={page === currentPage}
          onClick={handleClick}
          className={style.pagination_button}
        >
          {page}
        </button>
      ))}
      <button
        name="next"
        disabled={currentPage + 1 > LAST_PAGE}
        onClick={handleClick}
        className={style.pagination_button}
      >
        ▶
      </button>

      <button
        name="last"
        disabled={currentPage === LAST_PAGE}
        onClick={handleClick}
        className={style.pagination_button}
      >
        ▶▶
      </button>
    </div>
  ) : null;
};

export default Pagination;
