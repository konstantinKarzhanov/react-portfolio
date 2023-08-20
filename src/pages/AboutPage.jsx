import React from "react";
import DescriptionSection from "../components/DescriptionSection";
import ContactLink from "../components/ContactLink";
import SkillList from "../components/SkillList";
import Footer from "../components/Footer";
import pic from "../assets/pic.jpeg";

const AboutPage = () => {
  return (
    <>
      <main>
        <DescriptionSection
          descriptionHandle={[
            "Hi, I'm Kostiantyn!",
            "I am a skilled and passionate Software Developer currently enrolled as a student at Keyin College in St. John's, NL, Canada",
            "I really enjoy learning new things and figuring out how to solve problems",
          ]}
          ctaHandle={<ContactLink />}
          imgHandle={pic}
        />
        <SkillList />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
