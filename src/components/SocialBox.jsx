import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";

const SocialBox = () => {
  const socialArr = [
    {
      icon: <SlSocialLinkedin />,
      link: "https://linkedin.com/in/kostiantyn-karzhanov",
      title: "linkedin",
    },
    {
      icon: <VscGithubAlt />,
      link: "https://github.com/konstantinKarzhanov",
      title: "github",
    },
  ];

  const socialList = socialArr.map(({ icon, link, title }, index) => (
    <li key={index}>
      <a
        href={link}
        className="social-link d--block"
        target="_blank"
        title={title}
      >
        {icon}
      </a>
    </li>
  ));

  return <ul className="flex flex--ai-c flex--gap flex--jc-c">{socialList}</ul>;
};

export default SocialBox;
