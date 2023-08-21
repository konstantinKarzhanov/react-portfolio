import React from "react";
import Paragraph from "./Paragraph";

const DescriptionContainer = ({ descriptionHandle }) => {
  const descriptionArr = descriptionHandle.map((item, index) => (
    <Paragraph key={index} children={item} />
  ));
  return (
    <div className="description-box flow-spacing--2xl">{descriptionArr}</div>
  );
};

export default DescriptionContainer;
