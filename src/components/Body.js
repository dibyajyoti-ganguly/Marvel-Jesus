import useCharacters from "../utils/useCharacters";
import Shimmer from "./Shimmer";
import CharacterCard from "./CharacterCard";

const Body = () => {
  const characterList = useCharacters();

  console.log(characterList);

  return characterList == null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap mt-16 mb-4 mx-24 justify-evenly">
      {characterList.map((character) => (
        <CharacterCard data={character} />
      ))}
    </div>
  );
};

export default Body;
