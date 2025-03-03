import { apiBaseURL, params1 } from "./constants";
import { useEffect, useState } from "react";

const useCharacters = () => {
  const [characterList, setCharacterlist] = useState(null);

  const endpoint = `${apiBaseURL}/characters?`;

  const url = endpoint + params1;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredCharacters = data.data.results.filter(
          (character) =>
            !character.thumbnail.path.includes("image_not_available") &&
            !character.name.toLowerCase().includes("angela")
        );
        setCharacterlist(filteredCharacters);
        console.log(filteredCharacters);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error(error);
      });
  }, []);

  return characterList;
};

export default useCharacters;
