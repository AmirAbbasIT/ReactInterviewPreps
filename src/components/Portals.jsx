import React from "react";
import { createPortal } from "react-dom";

// portals let you render elements on different parts of dom....
const Portals = () => {
  return (
    <div>
      Portals
      {Portal}
    </div>
  );
};

export default Portals;

const Portal = createPortal(
  <>
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "300px",
          width: "300px",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <p>Hello guys</p>
      </div>
    </div>
  </>,
  document.body
);
