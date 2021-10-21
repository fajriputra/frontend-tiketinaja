import React from "react";

import "./detail-info.scss";

const DetailInfo = () => {
  return (
    <div className="content__movie--wrapper">
      <div className="content__movie--info">
        <h5 className="content__movie--title">Release Date</h5>
        <p className="content__movie--subtitle">June 28, 2017</p>
      </div>
      <div className="content__movie--info">
        <h5 className="content__movie--title">Duration</h5>
        <p className="content__movie--subtitle">2 hours 13 minutes</p>
      </div>
      <div className="content__movie--info">
        <h5 className="content__movie--title">Direct by</h5>
        <p className="content__movie--subtitle">Jon Watss</p>
      </div>
      <div className="content__movie--info">
        <h5 className="content__movie--title">Casts</h5>
        <p className="content__movie--subtitle">
          Tom Holland, Michael Keaton, Robert Downey Jr
        </p>
      </div>
    </div>
  );
};

export default DetailInfo;
