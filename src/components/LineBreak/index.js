import React from "react";

import "./line-break.scss";

const LineBreak = () => {
  return (
    <div className="d-flex justify-content-center align-items-center line-wrapper">
      <hr className="line w-100" />
      <span className="or mx-4">OR</span>
      <hr className="line w-100" />
    </div>
  );
};

export default LineBreak;
