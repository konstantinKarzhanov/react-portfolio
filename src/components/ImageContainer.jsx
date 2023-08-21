import React from "react";

const ImageContainer = ({ imgHandle, imgAlt }) => {
  return (
    <div className="container--img">
      <img src={imgHandle} className={`b-radius shadow`} alt={imgAlt} />
    </div>
  );
};

export default ImageContainer;
