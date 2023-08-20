import React from "react";
import useMainContext from "../hooks/useMainContext";
import DescriptionSection from "../components/DescriptionSection";
import ContactLink from "../components/ContactLink";
import Footer from "../components/Footer";
import pic_1 from "../assets/project-1.png";
import pic_2 from "../assets/project-2.jpg";
import pic_3 from "../assets/project-3.png";
import pic_4 from "../assets/project-4.png";

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
      <DescriptionSection
        key={id}
        titleHandle={title}
        descriptionHandle={description}
        imgHandle={
          id === 1 ? pic_1 : id === 2 ? pic_2 : id === 3 ? pic_3 : pic_4
        }
      />
    ));
  };

  return (
    <>
      <main>
        {isLoading && renderLoading()}
        {!isLoading && fetchError && renderError(fetchError)}
        {!isLoading && !fetchError && renderData(dataFromAPI, handleData)}
      </main>
      <Footer ctaHandle={<ContactLink />} />
    </>
  );
};

export default ProjectPage;
