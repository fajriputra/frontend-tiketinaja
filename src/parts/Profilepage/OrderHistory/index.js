import React from "react";

import CineOne from "assets/images/sponsor/logo-cineone.png";

import Card from "components/Card";
import Image from "components/Image";

import "./order-history.scss";
import Button from "components/UI/Button";

export default function OrderHistory(props) {
  return (
    <Card className="card__order--history">
      <div className="wrapper-history" style={{ marginBottom: 30 }}>
        <div className="order__history--content">
          <div className="order__history--head">
            <h5 className="order__history--title">
              Tuesday, 07 July 2020 - 04:30pm
            </h5>
            <p className="order__history--subtitle">Spider-Man: Homecoming</p>
          </div>
          <Image
            className="order__history--cinema"
            srcImage={CineOne}
            altImage="Sponsor Brand"
            imgClass="img-cover"
          />
        </div>
        <hr className="line w-100" />

        <div className="button__wrapper">
          <Button className="btn btn__ticket">Ticket in active</Button>
          <Button className="btn btn__ticket show d-none d-md-block">
            Show Details
          </Button>
        </div>
      </div>
    </Card>
  );
}
