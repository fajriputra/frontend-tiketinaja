import React from "react";

import CineOne from "assets/images/sponsor/logo-cineone.png";

import Card from "components/Card";
import Image from "components/Image";

import "./order-info.scss";

const OrderInfo = () => {
  return (
    <Card className="content__info--order">
      <div className="content__info--head">
        <Image
          className="content__info--image"
          srcImage={CineOne}
          altImage="CineOne21"
          imgClass="img-cover"
        />
        <h5 className="content__movie--cinema">CineOne21 Cinema</h5>
        <h5 className="content__text--name d-block d-md-none">
          Spider-Man: Homecoming
        </h5>
      </div>
      <div className="content__info--body">
        <div className="content__info--text d-none d-md-flex">
          <p className="content__text--movie">Movie selected</p>
          <h5 className="content__text--name">Spider-Man: Homecoming</h5>
        </div>
        <div className="content__info--text">
          <p className="content__text--movie">Tuesday, 07 July 2020</p>
          <h5 className="content__text--name">02:00pm</h5>
        </div>
        <div className="content__info--text">
          <p className="content__text--movie">One ticket price</p>
          <h5 className="content__text--name">$10</h5>
        </div>
        <div className="content__info--text">
          <p className="content__text--movie">Seat choosed</p>
          <h5 className="content__text--name">C4, C5, C6</h5>
        </div>

        <hr className="line w-100" />

        <div className="content__info--text">
          <p className="content__text--movie total__text">Total Payment</p>
          <h5 className="content__text--name total__price">$30</h5>
        </div>
      </div>
    </Card>
  );
};

export default OrderInfo;
