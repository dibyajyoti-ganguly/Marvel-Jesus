import { apiBaseURL, params2 } from "./constants";
import { useEffect, useState } from "react";

const useComics = () => {
  const [comicList, setComiclist] = useState(null);

  const endpoint = `${apiBaseURL}/comics?`;

  const url = endpoint + params2;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredComics = data.data.results.filter(
          (comic) =>
            !comic.thumbnail.path.includes("image_not_available") &&
            comic.creators.items.length != 0 &&
            !comic.title.toLowerCase().includes("ant-man (2003) #3")
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
