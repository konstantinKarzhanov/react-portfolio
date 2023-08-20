import React from "react";
import TitleH2 from "./TitleH2";
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";

const ContentSection = ({
  classHandle,
  titleHandle,
  descriptionHandle,
  ctaHandle,
  imgHandle,
}) => {
  return (
    <section className={classHandle}>
      <div className="flex flex--ai-c flex--jc-sb flex--gap">
        <div className="container--text flow-spacing--2xl">
          {titleHandle && <TitleH2 children={titleHandle} />}
          <TextContainer {...{ descriptionHandle }} />
          {ctaHandle}
        </div>
        <ImageContainer {...{ imgHandle }} />
      </div>
    </section>
  );
};

export default ContentSection;
