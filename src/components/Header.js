import Logo from "../images/logo.png";

const Header = () => {
  return (
    <div
      className=" bg-zinc-800 mt-0.5 mx-60 h-24 flex flex-row justify-evenly items-center text-white rounded-2xl font-mono
    text-lg subpixel-antialiased tracking-wider font-black"
    >
      <img src={Logo} className="w-32 mb-0.5" />
      <ul className="w-1/2 flex flex-row justify-between">
        <li>CHARACTERS</li>
        <li>NEWS</li>
        <li>GAMES</li>
        <li>COMICS</li>
        <li>MOVIES</li>
      </ul>
    </div>
  );
};

export default Header;
