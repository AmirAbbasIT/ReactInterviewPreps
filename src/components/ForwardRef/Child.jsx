import React, { forwardRef, useState } from "react";

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return <div ref={ref}>count : {count}</div>;
});

export default Child;
