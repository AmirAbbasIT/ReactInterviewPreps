import React, { useCallback, useState } from "react";
import Child from "./child";
const Callback = () => {
  const [count, setCount] = useState(0);

  const handleChild = useCallback(() => {}, []);

  console.log("Parent Rerender");

  return (
    <>
      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>counter +</button>
        <Child handleChild={handleChild} />
      </div>
    </>
  );
};

export default Callback;
