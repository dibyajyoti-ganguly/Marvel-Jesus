import { useRouteError } from "react-router-dom";

const Errorcomp = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!</h1>
      <h2>Looks like you ran into an error 😥</h2>
      <h2>
        {err.status} {err.statusText}
      </h2>
    </div>
  );
};

export default Errorcomp;
