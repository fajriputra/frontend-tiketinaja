import React from "react";

import Image from "components/Image";
import Card from "components/Card";

import "./crud-image.scss";

const CrudImage = (props) => {
  return (
    <>
      <Card className="crud__card--wrapper">
        <Image
          srcImage={props.movieImage}
          altImage="Movie Image"
          className="crud__image"
          imgClass="img-cover"
        />
      </Card>
    </>
  );
};

export default CrudImage;
