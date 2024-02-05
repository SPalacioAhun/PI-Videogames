import style from '../searchbar/searchbar.module.css'

function Searchbar() {
    return (
      <div className={style.container}>
        <form>
          <input placeholder="Busqueda" />
          <button>Buscar</button>
        </form>
        
      </div>
    );
  }
  
  export default Searchbar;