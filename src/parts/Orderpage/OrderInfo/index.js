import React from "react";

import ebvid from "assets/images/sponsor/logo-ebvid.png";
import cineone21 from "assets/images/sponsor/logo-cineone.png";
import hiflix from "assets/images/sponsor/logo-hiflix.png";

import Card from "components/Card";
import Image from "components/Image";

import "./order-info.scss";
import { formatRp } from "helpers/formatRp";
import { formatAMPM } from "helpers/formatTime";
import { formatDate } from "helpers/formatDate";

const OrderInfo = (props) => {
  const { movieId, timeSchedule, schedule, dateSchedule, seats } = props;

  return (
    <Card className="content__info--order">
      <div className="content__info--head">
        <Image
          className="content__info--image"
          srcImage={
            schedule.premier === "CineOne21"
              ? cineone21
              : schedule.premier === "ebv.id"
              ? ebvid
              : schedule.premier === "hiflix Cinema"
              ? hiflix
              : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          }
          altImage="CineOne21"
          imgClass="img-cover"
        />
        <h5 className="content__movie--cinema">{schedule?.premier}</h5>
        <h5 className="content__text--name d-block d-md-none">
          {movieId?.name}
        </h5>
      </div>
      <div className="content__info--body">
        <div className="content__info--text d-none d-md-flex">
          <p className="content__text--movie">Movie selected</p>
          <h5 className="content__text--name">{movieId?.name}</h5>
        </div>
        <div className="content__info--text">
          <p className="content__text--movie">{formatDate(dateSchedule)}</p>
          <h5 className="content__text--name">{formatAMPM(timeSchedule)}</h5>
        </div>
        <div className="content__info--text">
          <p className="content__text--movie">One ticket price</p>
          <h5 className="content__text--name">{formatRp(schedule?.price)}</h5>
        </div>
        <div className="content__info--text">
          <p className="content__text--movie">Seat choosed</p>
          <h5 className="content__text--name">{seats.join(", ")}</h5>
        </div>

        <hr className="line w-100" />

        <div className="content__info--text">
          <p className="content__text--movie total__text">Total Payment</p>
          <h5 className="content__text--name total__price">
            {formatRp(
              seats.length === 0
                ? schedule?.price
                : schedule?.price * seats.length
            )}
          </h5>
        </div>
      </div>
    </Card>
  );
};

export default OrderInfo;
