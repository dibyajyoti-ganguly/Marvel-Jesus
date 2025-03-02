import { useState, useEffect } from "react";

const Shimmer = ({ data }) => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTest((prevTest) => (data == null ? prevTest + 15 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="w-full max-w-md mx-auto mt-48">
      {/* Progress Bar Container */}
      <div className="relative w-full h-20 bg-transparent rounded-full border-4 border-blue-500 border-solid overflow-hidden">
        {/* Progress Fill */}
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${test}%` }}
        ></div>
      </div>
      <br />
      {/* Percentage Text */}
      <p className="text-center text-gray-700 font-mono font-black text-3xl">
        {test}%
      </p>
    </div>
  );
};

export default Shimmer;
