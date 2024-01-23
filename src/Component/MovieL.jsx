import MovieCrd from "./MovieCrd";

const MovieL = ({ movies }) => {
  return ( 
    <div>
      {movies.map((movie) => (
        <MovieCrd key={movie.title} {...movie} />
      ))}
    </div>
   );
}
 
export default MovieL;