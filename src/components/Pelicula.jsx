import './Pelicula';

const ListarPeliculas = ({ peliculas }) => {
  return peliculas.map((pelicula, index) => {
    let metascoreColor;

    if (pelicula.metascore < 50) {
      metascoreColor = 'red';
    } else if (pelicula.metascore >= 50 && pelicula.metascore < 60) {
      metascoreColor = 'rgb(221, 221, 0)';
    } else {
      metascoreColor = 'green';
    }

    return (
      <div className="cardPelicula" key={index}>
        <img
          src={pelicula.poster}
          alt={pelicula.title}
          className="imgPelicula"
        />
        <section className="detallePelicula">
          <h3 className="tituloPelicula">{pelicula.title}</h3>
          <div className="minimos">
            <p className="estreno">{pelicula.releaseDate.slice(-4)} | </p>
            <p className="clasificacion"> {pelicula.maturity} |</p>
            <ul className="listaGenero">
              {' '}
              {pelicula.genres.map((generos, indexg) => {
                return (
                  <li className="genero" key={indexg}>
                    {' '}
                    {generos}{' '}
                  </li>
                );
              })}{' '}
            </ul>
          </div>
          <div className="calificacion">
            <p className="valoracion">
              {' '}
              ✩ <b>{pelicula.rating}</b> |
            </p>
            <p className="metascore">
              Metascore:{' '}
              <b style={{ color: metascoreColor }}>{pelicula.metascore}</b>
            </p>
          </div>
          <p className="resumen">{pelicula.plot}</p>
          <div className="personajes">
            <p className="director">{pelicula.director} |</p>
            <ul className="listaActores">
              {' '}
              {pelicula.mainActors.map((actores, indexa) => {
                return (
                  <li className="actores" key={indexa}>
                    {actores}
                  </li>
                );
              })}{' '}
            </ul>
          </div>
        </section>
      </div>
    );
  });
};

export default ListarPeliculas;
