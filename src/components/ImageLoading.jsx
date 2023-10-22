import React, { useState } from "react";

const ImageLoading = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <img
        onLoad={() => setLoading(false)}
        style={{ display: loading ? "none" : "", objectFit: "cover" }}
        width={500}
        height={500}
        src="https://loremflickr.com/320/240"
      />
      {loading && (
        <div
          style={{
            width: "500px",
            height: "500px",
            objectFit: "contains",
            backgroundColor: "red",
          }}
        ></div>
      )}
    </div>
  );
};

export default ImageLoading;
