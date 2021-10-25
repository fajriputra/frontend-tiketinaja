import React from "react";

import { formatDate } from "helpers/formatDate";
import { formatAMPM } from "helpers/formatTime";
import { formatRp } from "helpers/formatRp";

import "./payment-info.scss";

const PaymentInfo = (props) => {
  const { dateSchedule, movieId, schedule, seats, timeSchedule } = props;

  return (
    <div className="content__info--body">
      <div className="content__wrapper--info">
        <p className="content__text--title">Date & time</p>
        <p className="content__text--name">
          {formatDate(dateSchedule)} at {formatAMPM(timeSchedule)}
        </p>
      </div>
      <hr className="line w-100" />
      <div className="content__wrapper--info">
        <p className="content__text--title">Movie title</p>
        <p className="content__text--name">{movieId[0]?.name}</p>
      </div>
      <hr className="line w-100" />
      <div className="content__wrapper--info">
        <p className="content__text--title">Cinema name</p>
        <p className="content__text--name">{schedule?.premier}</p>
      </div>
      <hr className="line w-100" />
      <div className="content__wrapper--info">
        <p className="content__text--title">Number of tickets</p>
        <p className="content__text--name">{seats?.length} pieces</p>
      </div>
      <hr className="line w-100" />
      <div className="content__wrapper--info">
        <p className="content__text--title">Total Payment</p>
        <p className="content__text--name total__price">
          {" "}
          {formatRp(
            seats.length === 0
              ? schedule?.price
              : schedule?.price * seats.length
          )}
        </p>
      </div>
    </div>
  );
};

export default PaymentInfo;
