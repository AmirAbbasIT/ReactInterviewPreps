import React from "react";

const child = ({ handleChild }) => {
  console.log("child rerendered");
  return <div>child</div>;
};

export default React.memo(child);
