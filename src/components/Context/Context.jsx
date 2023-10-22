import React, { useContext } from "react";
import Child1 from "./Child1";
import { CounterContext } from "./Provider";

const Context = () => {
  const state = useContext(CounterContext);
  console.log("parent updated");
  return (
    <div>
      Context
      <div>
        <Child1 />
      </div>
      <button onClick={() => state.setCounter(state.counter + 1)}>
        update
      </button>
    </div>
  );
};

export default React.memo(Context);
