const ComiCard = (props) => {
  const { title, thumbnail, creators } = props.data;

  const crname = creators.items[0].name;

  console.log(creators.items[0].name);

  return (
    <div className="w-48 h-[340px] my-2.5 bg-zinc-800 text-white font-mono font-black subpixel-antialiased tracking-wider shadow-2xl">
      <img
        className="h-2/3 w-full"
        src={thumbnail.path + "." + thumbnail.extension}
        alt="resimg"
      />
      <hr className="border-t-4 border-red-500" />
      <p className="line-clamp-2 pt-4 px-4 text-sm">{title.toUpperCase()}</p>
      <p className="px-4 pt-3 text-xs">{crname}</p>
    </div>
  );
};

export default ComiCard;
