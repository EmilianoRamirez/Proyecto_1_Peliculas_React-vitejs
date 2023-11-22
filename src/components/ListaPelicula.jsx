import Pelicula from './Pelicula';
import datos from '../json/MOVIES_DATA.json';
import './ListaPelicula.css';

function ListaPelicula() {
  return (
    <div className="listaPelicula">
      <Pelicula peliculas={datos} />
    </div>
  );
}

export default ListaPelicula;
