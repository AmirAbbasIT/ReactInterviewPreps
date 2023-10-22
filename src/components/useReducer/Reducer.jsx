import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "incre":
      return { count: state.count + 1 };
    default:
      return state;
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleClick = () => {
    dispatch({ type: "incre" });
  };
  return (
    <div>
      {state.count}
      <div>
        <button onClick={handleClick}>Counter+</button>
      </div>
    </div>
  );
};

export default Reducer;
