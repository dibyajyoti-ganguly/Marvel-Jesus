import { useEffect, useState } from "react";

const useMovies = () => {
  const [movieList, setMovielist] = useState(null);

  const endpoint = "https://mcuapi.herokuapp.com/api/v1/movies";

  const params = "?&limit=36";

  const url = endpoint + params;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovielist(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error(error);
      });
  }, []);

  return movieList;
};

export default useMovies;
