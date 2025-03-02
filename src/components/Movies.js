import useMovies from "../utils/useMovies";
import Shimmer from "./Shimmer";
import MovieCard from "./MovieCard";

const Movies = () => {
  const movieList = useMovies();

  return movieList == null ? (
    <Shimmer data={movieList} />
  ) : (
    <div className="flex flex-wrap mb-4 mx-24 mt-16 justify-evenly">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
    </div>
  );
};

export default Movies;
