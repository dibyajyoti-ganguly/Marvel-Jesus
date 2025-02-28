import { useState } from "react";
import useCharacters from "../utils/useCharacters";
import Shimmer from "./Shimmer";
import CharacterCard from "./CharacterCard";

const Body = () => {
  const [inpchange, setInpChange] = useState("");
  const [inpclick, setInpClick] = useState(0);

  const characterList = useCharacters();

  return characterList == null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          className="mt-16 mb-16 bg-zinc-400 rounded-3xl outline-zinc-800 outline-4 h-12 w-2/6 text-center text-zinc-800 font-mono text-md font-black"
          onChange={(e) => {
            setInpChange(e.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" && inpchange.length != 0) {
              setInpClick(1);
            }
          }}
        ></input>
      </div>
      <div className="flex flex-wrap mb-4 mx-24 justify-evenly">
        {inpclick
          ? characterList
              .filter((character) =>
                character.name
                  .toLowerCase()
                  .includes(inpchange.toLowerCase())
              )
              .map((character) => (
                <CharacterCard key={character.id} data={character} />
              ))
          : characterList.map((character) => (
              <CharacterCard key={character.id} data={character} />
            ))}
      </div>
    </div>
  );
};

export default Body;
