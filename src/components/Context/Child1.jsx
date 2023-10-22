import React from "react";
import Child2 from "./Child2";

const Child1 = () => {
  console.log("child1 updated");
  return (
    <div>
      <div>
        <Child2 />
      </div>
    </div>
  );
};

export default React.memo(Child1);
