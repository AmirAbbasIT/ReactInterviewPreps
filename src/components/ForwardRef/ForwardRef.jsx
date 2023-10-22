import React, { useRef } from "react";
import Child from "./Child";

const ForwardRef = () => {
  const ref = useRef();
  console.log(ref.current);
  return (
    <div>
      ForwardRef
      <Child ref={ref} />
    </div>
  );
};

export default ForwardRef;
