import useComics from "../utils/useComics";
import Shimmer from "./Shimmer";
import ComiCard from "./ComiCard";

const Comics = () => {
  const comicList = useComics();

  return comicList == null ? (
    <Shimmer data={comicList} />
  ) : (
    <div className="flex flex-wrap mb-4 mx-24 mt-16 justify-evenly">
      {comicList.map((comic) => (
        <ComiCard key={comic.id} data={comic} />
      ))}
    </div>
  );
};

export default Comics;
