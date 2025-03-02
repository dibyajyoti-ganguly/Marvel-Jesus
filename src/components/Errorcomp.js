import { useRouteError } from "react-router-dom";

const Errorcomp = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen bg-zinc-300 flex flex-col justify-center items-center font-black font-mono text-3xl text-gray-700 leading-10">
      <h1>OOPS!</h1>
      <h2>Looks like you ran into an error 😥</h2>
      <h2 className="text-red-500">
        {err.status} {err.statusText.toUpperCase()}
      </h2>
    </div>
  );
};

export default Errorcomp;
