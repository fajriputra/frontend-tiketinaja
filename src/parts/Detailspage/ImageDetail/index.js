import React from "react";

import Movie1 from "assets/images/movie6.jpg";

import Image from "components/Image";
import Card from "components/Card";

import "./image-detail.scss";

const ImageDetail = () => {
  return (
    <Card className="card__wrapper">
      <Image
        srcImage={Movie1}
        altImage="Detail Image Movie"
        className="detail__movie--image"
        imgClass="img-cover"
      />
    </Card>
  );
};

export default ImageDetail;
