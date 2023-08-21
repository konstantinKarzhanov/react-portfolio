import React from "react";

// components
import ContentSection from "../components/ContentSection";
import ContactLink from "../components/ContactLink";
import SkillList from "../components/SkillList";
import Main from "../components/Main";
import Footer from "../components/Footer";

// images
import pic from "../assets/pic.jpeg";

const AboutPage = () => {
  return (
    <>
      <Main>
        <div className="container container--80">
          <ContentSection
            classHandle="section--about"
            descriptionHandle={[
              "Hi, I'm Kostiantyn!",
              "I am a skilled and passionate Software Developer currently enrolled as a student at Keyin College in St. John's, NL, Canada",
              "I really enjoy learning new things and figuring out how to solve problems",
            ]}
            addElementHandle={<ContactLink />}
            imgHandle={pic}
            imgAlt="photo"
          />
          <SkillList />
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default AboutPage;
