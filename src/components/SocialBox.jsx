import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialBox = () => {
  const socialArr = [
    {
      icon: <BsGithub />,
      link: "https://github.com/konstantinKarzhanov",
      title: "github",
    },
    {
      icon: <BsLinkedin />,
      link: "https://linkedin.com/in/kostiantyn-karzhanov",
      title: "linkedin",
    },
  ];

  const socialList = socialArr.map(({ icon, link, title }, index) => (
    <li key={index}>
      <a href={link} target="_blank" title={title}>
        {icon}
      </a>
    </li>
  ));

  return <ul>{socialList}</ul>;
};

export default SocialBox;
