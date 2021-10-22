import React from "react";

import Image from "components/Image";
import Card from "components/Card";

import "./image-detail.scss";
import { apiHost } from "config";

const ImageDetail = ({ data }) => {
  return (
    <>
      <Card className="card__wrapper">
        <Image
          srcImage={
            data[0]?.image
              ? `${apiHost}/uploads/movie/${data[0]?.image}`
              : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          }
          altImage={data[0]?.name}
          className="detail__movie--image"
          imgClass="img-cover"
        />
      </Card>
    </>
  );
};

export default ImageDetail;
