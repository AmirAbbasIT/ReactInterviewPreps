import React, { useContext } from "react";
import { CounterContext } from "./Provider";
const Child2 = () => {
  console.log("child2 updated");
  const state = useContext(CounterContext);
  return <div>Counter : {state.counter}</div>;
};

export default React.memo(Child2);
