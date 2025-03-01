import { useState, useEffect } from "react";

const Shimmer = ({ data }) => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTest((prevTest) => (data == null ? prevTest + 13 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div>
      <progress value={test} max={100} />
      <p>{test}%</p>
    </div>
  );
};

export default Shimmer;
