import React from "react";
import SocialBox from "./SocialBox";

const Footer = ({ ctaHandle }) => {
  return (
    <footer className="text-center">
      <div className="m--c container container--px">
        <div className="contact-box flex flex--jc-c">
          <SocialBox />
          {ctaHandle}
        </div>
        <p className="copyright">© all rights reserved, 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
