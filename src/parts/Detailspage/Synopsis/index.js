import React from "react";

import "./synopsis.scss";

const Synopsis = ({ data }) => {
  return (
    <div className="content__synopsis">
      <h5 className="content__synopsis--title">Synopsis</h5>
      <p className="content__synopsis--subtitle">{data[0]?.synopsis}</p>
    </div>
  );
};

export default Synopsis;
