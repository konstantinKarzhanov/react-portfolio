import React from "react";

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
    <section>
      <ul>{skillList}</ul>
    </section>
  );
};

export default SkillList;
