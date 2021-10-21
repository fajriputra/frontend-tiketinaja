import React from "react";

import "./payment-info.scss";

const PaymentInfo = () => {
  return (
    <div class="content__info--body">
      <div class="content__wrapper--info">
        <p class="content__text--title">Date & time</p>
        <p class="content__text--name">Tuesday, 07 July 2020 at 02:00pm</p>
      </div>
      <hr class="line w-100" />
      <div class="content__wrapper--info">
        <p class="content__text--title">Movie title</p>
        <p class="content__text--name">Spider-Man: Homecoming</p>
      </div>
      <hr class="line w-100" />
      <div class="content__wrapper--info">
        <p class="content__text--title">Cinema name</p>
        <p class="content__text--name">CineOne21 Cinema</p>
      </div>
      <hr class="line w-100" />
      <div class="content__wrapper--info">
        <p class="content__text--title">Number of tickets</p>
        <p class="content__text--name">3 pieces</p>
      </div>
      <hr class="line w-100" />
      <div class="content__wrapper--info">
        <p class="content__text--title">Total Payment</p>
        <p class="content__text--name total__price">$30,00</p>
      </div>
    </div>
  );
};

export default PaymentInfo;
