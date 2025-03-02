const ComiCard = (props) => {
  const { title, thumbnail } = props.data;

  return (
    <div className="w-32 my-2.5 bg-zinc-800 text-white font-mono font-black subpixel-antialiased tracking-wider shadow-2xl">
      <img
        className="h-2/3 w-[195px]"
        src={thumbnail.path + "." + thumbnail.extension}
        alt="resimg"
      />
      <hr className="border-t-4 border-red-500" />
      <p className="line-clamp-3 pt-2 px-2 text-xs">{title}</p>
    </div>
  );
};

export default ComiCard;
