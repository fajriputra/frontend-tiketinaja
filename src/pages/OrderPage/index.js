import React from "react";

import Header from "components/Header";
import Sitelink from "components/Sitelink";

import "./order-page.scss";
import MovieSelect from "parts/Orderpage/MovieSelect";
import OrderInfo from "parts/Orderpage/OrderInfo";
import Seats from "parts/Orderpage/Seats";

import useScrollTop from "hooks/useScrollTop";

export default function OrderPage(props) {
  useScrollTop();

  return (
    <>
      <Header {...props} className="mb-0 mb-md-4" />
      <section className="content__order">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h5 className="content__heading d-none d-md-block">
                Movie Selected
              </h5>

              <div className="content__order--movie">
                <MovieSelect />
                <h5 className="content__heading">Choose Your Seat</h5>
                <Seats />
              </div>
            </div>
            <div className="col-md-4">
              <h5 class="content__heading">Order Info</h5>
              <OrderInfo />
            </div>
          </div>
        </div>
      </section>
      <Sitelink />
    </>
  );
}
