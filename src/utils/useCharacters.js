import { apiBaseURL, privateKey, publicKey } from "./constants";
import md5 from "md5";
import { useEffect, useState } from "react";

const useCharacters = () => {
  const [characterList, setCharacterlist] = useState(null);

  const ts = Date.now();

  const hash = md5(ts + privateKey + publicKey);

  const params = new URLSearchParams({
    ts: ts,
    limit: 54,
    apikey: publicKey,
    hash: hash,
  });

  const endpoint = `${apiBaseURL}/characters?`;

  const url = endpoint + params;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredCharacters = data.data.results.filter(
          (character) =>
            !character.thumbnail.path.includes("image_not_available")
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
