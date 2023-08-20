import React from "react";
import TitleH2 from "./TitleH2";

const SkillList = () => {
  const skillsArr = [
    "HTML",
    "JavaScript",
    "Python",
    "GitHub",
    "CSS",
    "React",
    "Figma",
    "AWS",
  ];
  const skillList = skillsArr.map((item, index) => <li key={index}>{item}</li>);

  return (
    <section className="section--skills flow-spacing--2xl">
      <TitleH2 children="My skill set includes" />
      <ul className="grid grid-container grid--ji-c list--circle">
        {skillList}
      </ul>
    </section>
  );
};

export default SkillList;
