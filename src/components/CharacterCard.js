const CharacterCard = (props) => {
  const { name, thumbnail } = props.data;

  return (
    <div className="w-[195px] h-[290px] my-2.5 bg-zinc-800 text-white font-mono font-black subpixel-antialiased tracking-wider">
      <img
        className="h-2/3 w-[195px]"
        src={thumbnail.path + "." + thumbnail.extension}
        alt="resimg"
      />
      <h3 className="truncate pt-4 px-3">{name.toUpperCase()}</h3>
    </div>
  );
};

export default CharacterCard;
