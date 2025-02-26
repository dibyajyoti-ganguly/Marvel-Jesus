import useCharacters from "../utils/useCharacters";
import Shimmer from "./Shimmer";

const Body = () => {
  const characterList = useCharacters();

  console.log(characterList);

  return characterList == null ? <Shimmer /> : <div>HELLO</div>;
};

export default Body;
