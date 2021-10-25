import React from "react";

import "./payment-info.scss";

const PaymentInfo = () => {
  return (
    <div className="content__info--body">
      <div className="content__wrapper--info">
        <p className="content__text--title">Date & time</p>
        <p className="content__text--name">Tuesday, 07 July 2020 at 02:00pm</p>
      </div>
      <hr className="line w-100" />
      <div className="content__wrapper--info">
        <p className="content__text--title">Movie title</p>
        <p className="content__text--name">Spider-Man: Homecoming</p>
      </div>
      <hr className="line w-100" />
      <div className="content__wrapper--info">
        <p className="content__text--title">Cinema name</p>
        <p className="content__text--name">CineOne21 Cinema</p>
      </div>
      <hr className="line w-100" />
      <div className="content__wrapper--info">
        <p className="content__text--title">Number of tickets</p>
        <p className="content__text--name">3 pieces</p>
      </div>
      <hr className="line w-100" />
      <div className="content__wrapper--info">
        <p className="content__text--title">Total Payment</p>
        <p className="content__text--name total__price">$30,00</p>
      </div>
    </div>
  );
};

export default PaymentInfo;
