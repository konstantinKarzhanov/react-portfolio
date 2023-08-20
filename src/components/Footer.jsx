import React from "react";
import SocialBox from "./SocialBox";

const Footer = ({ ctaHandle }) => {
  return (
    <footer>
      <div>
        <SocialBox />
        {ctaHandle}
      </div>
      <p>© all rights reserved, 2023</p>
    </footer>
  );
};

export default Footer;
