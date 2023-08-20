import React from "react";
import useMainContext from "../hooks/useMainContext";
import ContentSection from "../components/ContentSection";
import ContactLink from "../components/ContactLink";
import Footer from "../components/Footer";
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
      />
    ));
  };

  return (
    <>
      <main className="container container--px">
        <article className="article-projects container container--80 flow-spacing--project">
          {isLoading && renderLoading()}
          {!isLoading && fetchError && renderError(fetchError)}
          {!isLoading && !fetchError && renderData(dataFromAPI, handleData)}
        </article>
      </main>
      <Footer ctaHandle={<ContactLink />} />
    </>
  );
};

export default ProjectPage;
