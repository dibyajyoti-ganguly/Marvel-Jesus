import { apiBaseURL, privateKey, publicKey } from "./constants";
import md5 from "md5";
import { useEffect, useState } from "react";

const useCharacters = () => {
  const [characterList, setCharacterlist] = useState(null);

  const ts = Date.now();

  const params = new URLSearchParams({
    ts: ts,
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey), // Generate hash for authentication
  });

  const endpoint = `${apiBaseURL}/characters?`;

  const url = endpoint + params;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacterlist(data.data.results);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error(error);
      });
  }, []);

  return characterList;
};

export default useCharacters;
