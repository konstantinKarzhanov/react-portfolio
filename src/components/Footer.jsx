import React from "react";
import SocialBox from "./SocialBox";

const Footer = ({ addElementHandle }) => {
  return (
    <footer className="text-center">
      <div className="contact-box flex flex--jc-c">
        <SocialBox />
        {addElementHandle}
      </div>
      <p className="copyright">© all rights reserved, 2023</p>
    </footer>
  );
};

export default Footer;
