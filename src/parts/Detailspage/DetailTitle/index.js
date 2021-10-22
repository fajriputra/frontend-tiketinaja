import React from "react";

import "./detail-title.scss";

const DetailTitle = ({ data }) => {
  return (
    <div className="content__movie--head">
      <h1 className="content__movie--title">{data[0]?.name}</h1>
      <p className="content__movie--category">{data[0]?.category.join(", ")}</p>
    </div>
  );
};

export default DetailTitle;
