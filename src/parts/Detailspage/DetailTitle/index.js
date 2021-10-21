import React from "react";

import "./detail-title.scss";

const DetailTitle = (props) => {
  return (
    <div className="content__movie--head">
      <h1 className="content__movie--title">Spider-Man: Homecoming</h1>
      <p className="content__movie--category">Adventure, Action, Sci-Fi</p>
    </div>
  );
};

export default DetailTitle;
