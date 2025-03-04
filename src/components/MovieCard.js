const MovieCard = (props) => {
  const { title, cover_url } = props.data;

  return (
    <div className="w-48 h-[340px] my-2.5 bg-zinc-800 text-white font-mono font-black subpixel-antialiased tracking-wider shadow-2xl rounded-lg">
      <img className="h-2/3 w-full rounded-lg" src={cover_url} alt="resimg" />
      <hr className="border-t-4 border-red-500" />
      <h3 className="line-clamp-3 pt-4 px-3 text-sm">{title.toUpperCase()}</h3>
    </div>
  );
};

export default MovieCard;
