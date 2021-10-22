import React from "react";

import "./detail-info.scss";

const DetailInfo = ({ data }) => {
  const parse = new Date(data[0]?.releaseDate);

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];

  return (
    <>
      <div className="content__movie--wrapper">
        <div className="content__movie--info">
          <h5 className="content__movie--title">Release Date</h5>
          <p className="content__movie--subtitle">{`${
            month[parse.getMonth()]
          } ${parse.getDate()}, ${parse.getFullYear()}`}</p>
        </div>
        <div className="content__movie--info">
          <h5 className="content__movie--title">Duration</h5>
          <p className="content__movie--subtitle">{data[0]?.duration}</p>
        </div>
        <div className="content__movie--info">
          <h5 className="content__movie--title">Direct by</h5>
          <p className="content__movie--subtitle">{data[0]?.director}</p>
        </div>
        <div className="content__movie--info">
          <h5 className="content__movie--title">Casts</h5>
          <p className="content__movie--subtitle">{data[0]?.cast.join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default DetailInfo;
