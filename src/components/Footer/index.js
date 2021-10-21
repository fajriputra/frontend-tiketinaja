import React from "react";

import "./footer.scss";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <p className="footer__text">© {year} Tickitz. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
