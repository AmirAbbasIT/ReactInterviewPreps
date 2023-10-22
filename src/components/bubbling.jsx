import React from "react";

const bubbling = () => {
  const handleClick = (e) => {
    alert("Button 1 clicked");
  };
  const handleClicka = () => {
    alert("parent div clicked");
  };
  const handleClickb = () => {
    alert("child div  clicked");
  };

  return (
    <div onClick={(e) => handleClicka()}>
      <div onClick={(e) => handleClickb()}>
        <button onClickCapture={(e) => handleClick(e)}>ClickMe</button>
      </div>
    </div>
  );
};

export default bubbling;
