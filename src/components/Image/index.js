import React from "react";
import propTypes from "prop-types";

const Image = (props) => {
  return (
    <figure className={props.className}>
      <img
        src={props.srcImage}
        alt={props.altImage}
        className={props.imgClass}
      />
    </figure>
  );
};

export default Image;

Image.propTypes = {
  className: propTypes.string,
  srcImage: propTypes.string,
  altImage: propTypes.string,
  imgClass: propTypes.string,
};
