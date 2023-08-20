import React from "react";
import ContentSection from "../components/ContentSection";
import ContactLink from "../components/ContactLink";
import SkillList from "../components/SkillList";
import Footer from "../components/Footer";
import pic from "../assets/pic.jpeg";

const AboutPage = () => {
  return (
    <>
      <main className="container container--px">
        <div className="container container--80">
          <ContentSection
            classHandle="section--about"
            descriptionHandle={[
              "Hi, I'm Kostiantyn!",
              "I am a skilled and passionate Software Developer currently enrolled as a student at Keyin College in St. John's, NL, Canada",
              "I really enjoy learning new things and figuring out how to solve problems",
            ]}
            ctaHandle={<ContactLink />}
            imgHandle={pic}
          />
          <SkillList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
