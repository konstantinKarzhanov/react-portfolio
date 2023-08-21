import React from "react";
import TitleH2 from "./TitleH2";
import DescriptionContainer from "./DescriptionContainer";
import ImageContainer from "./ImageContainer";

const ContentSection = ({
  classHandle,
  titleHandle,
  descriptionHandle,
  addElementHandle,
  imgHandle,
  imgAlt,
}) => {
  return (
    <section className={classHandle}>
      <div className="flex flex--ai-c flex--jc-sb flex--gap">
        <div className="container--description flow-spacing--2xl">
          {titleHandle && <TitleH2 children={titleHandle} />}
          <DescriptionContainer {...{ descriptionHandle }} />
          {addElementHandle}
        </div>
        <ImageContainer {...{ imgHandle, imgAlt }} />
      </div>
    </section>
  );
};

export default ContentSection;
