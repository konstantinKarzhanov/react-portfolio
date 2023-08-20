import React from "react";
import TitleH2 from "./TitleH2";
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";

const DescriptionSection = ({
  imgHandle,
  titleHandle,
  descriptionHandle,
  ctaHandle,
}) => {
  return (
    <section>
      <div>
        <div>
          {titleHandle && <TitleH2 children={titleHandle} />}
          <TextContainer {...{ descriptionHandle }} />
          {ctaHandle}
        </div>
        <ImageContainer {...{ imgHandle }} />
      </div>
    </section>
  );
};

export default DescriptionSection;
