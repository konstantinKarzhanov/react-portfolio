import React from "react";
import Paragraph from "./Paragraph";

const TextContainer = ({ descriptionHandle }) => {
  const text = descriptionHandle.map((item, index) => (
    <Paragraph key={index} text={item} />
  ));
  return <div className="container--text flow-spacing--2xl">{text}</div>;
};

export default TextContainer;
