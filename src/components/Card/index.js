import React from "react";
import propTypes from "prop-types";

import "./card.scss";

const Card = (props) => {
  return (
    <div
      className={["movies__card", props.className].join(" ")}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  className: propTypes.string,
};
