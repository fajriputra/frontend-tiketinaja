import React from "react";
import propTypes from "prop-types";

import "./meta-wrapper.scss";

const MetaWrapper = (props) => {
  return (
    <div className={["meta__wrapper text-center", props.className].join(" ")}>
      <h5 className={["meta__wrapper--title", props.classTitle].join(" ")}>
        {props.title}
      </h5>
      <p className={["meta__wrapper--category", props.classCategory].join(" ")}>
        {props.category}
      </p>

      {props.children}
    </div>
  );
};

export default MetaWrapper;

MetaWrapper.propTypes = {
  className: propTypes.string,
  classTitle: propTypes.string,
  classCategory: propTypes.string,
  title: propTypes.string,
  category: propTypes.string,
};
