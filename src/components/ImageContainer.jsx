import React from "react";

const ImageContainer = ({ imgHandle }) => {
  return (
    <div className="container--img">
      <img src={imgHandle} className={`b-radius shadow`} />
    </div>
  );
};

export default ImageContainer;
