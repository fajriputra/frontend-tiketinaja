import React from "react";

import MovieImage from "assets/images/movie6.jpg";

import Image from "components/Image";
import Card from "components/Card";

import "./crud-image.scss";

const CrudImage = () => {
  return (
    <>
      <Card className="crud__card--wrapper">
        <Image
          srcImage={MovieImage}
          altImage="Movie Image"
          className="crud__image"
          imgClass="img-cover"
        />
      </Card>
    </>
  );
};

export default CrudImage;
