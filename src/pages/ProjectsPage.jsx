import React from "react";

// hooks
import useMainContext from "../hooks/useMainContext";

// components
import ContentSection from "../components/ContentSection";
import ContactLink from "../components/ContactLink";
import Main from "../components/Main";
import Footer from "../components/Footer";

// images
import pic_1 from "../assets/project-image-1.png";
import pic_2 from "../assets/project-image-2.png";
import pic_3 from "../assets/project-image-3.png";
import pic_4 from "../assets/project-image-4.png";
import pic_5 from "../assets/project-image-5.png";

const ProjectPage = () => {
  const {
    isLoading,
    fetchError,
    dataFromAPI,
    renderLoading,
    renderError,
    renderData,
  } = useMainContext();

  const handleData = (data) => {
    return data.map(({ id, title, description }) => (
      <ContentSection
        key={id}
        classHandle="section--project"
        titleHandle={title}
        descriptionHandle={description}
        imgHandle={
          id === 1
            ? pic_1
            : id === 2
            ? pic_2
            : id === 3
            ? pic_3
            : id === 4
            ? pic_4
            : pic_5
        }
        imgAlt={`project-${id}`}
      />
    ));
  };

  return (
    <>
      <Main>
        <article className="article--projects container container--80 flow-spacing--project">
          {isLoading && renderLoading()}
          {!isLoading && fetchError && renderError(fetchError)}
          {!isLoading && !fetchError && renderData(dataFromAPI, handleData)}
        </article>
      </Main>
      <Footer addElementHandle={<ContactLink />} />
    </>
  );
};

export default ProjectPage;
