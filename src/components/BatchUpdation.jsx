import React, { useEffect, useState } from "react";

const BatchUpdation = () => {
  const [counter, setCounter] = useState(0);
  const [f, setF] = useState("hmm");

  const handleClick = () => {
    setCounter(counter + 1); // counter will be 1
    setCounter(counter + 2); // counter will be 2
    setCounter(counter + 2); // counter will be 2
    setCounter(counter + 3); // counter will be 3
    setCounter((c) => c + 1); // counter will be 4
    setCounter(counter + 3); // counter will be 3
    setCounter((c) => c + 1); // counter will be 4
    setCounter((c) => c + 1); // counter will be 5
    setCounter((c) => c + 1); // counter will be 6
    setCounter(counter + 1); // counter will be 1
    setF(1 + f);
  };

  useEffect(() => {
    console.log("Something changed");
  }, [f, counter]);

  return (
    <div>
      BatchUpdation<button onClick={handleClick}>counter + : {counter}</button>
      <div>{f}</div>
    </div>
  );
};

export default BatchUpdation;
