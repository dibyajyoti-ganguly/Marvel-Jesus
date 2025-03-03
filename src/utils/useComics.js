import { apiBaseURL, params } from "./constants";
import { useEffect, useState } from "react";

const useComics = () => {
  const [comicList, setComiclist] = useState(null);

  const endpoint = `${apiBaseURL}/comics?`;

  const url = endpoint + params;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredComics = data.data.results.filter(
          (comic) => !comic.thumbnail.path.includes("image_not_available")
        );
        setComiclist(filteredComics);
        console.log(filteredComics);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return comicList;
};

export default useComics;
