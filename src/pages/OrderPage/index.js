import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "components/Header";
import Sitelink from "components/Sitelink";

import "./order-page.scss";
import MovieSelect from "parts/Orderpage/MovieSelect";
import OrderInfo from "parts/Orderpage/OrderInfo";
import Seats from "parts/Orderpage/Seats";

import Button from "components/UI/Button";

import useScrollTop from "hooks/useScrollTop";

export default function OrderPage(props) {
  useScrollTop();
  const history = useHistory();

  const data = props.location.state;

  const [seatAlpha, setSeatAlpha] = useState(["A", "B", "C"]);
  const [selectSeat, setSelectSeat] = useState([]);
  const [reversedSeat, setReversedSeat] = useState([]);

  const selectedSeat = (data) => {
    if (selectSeat.includes(data)) {
      const deleteSeat = selectSeat.filter((val) => {
        return val !== data;
      });

      setSelectSeat({
        selectSeat: deleteSeat,
      });
    } else {
      setSelectSeat({
        selectSeat: [...selectSeat, data],
      });
    }
  };

  const resetSeat = () => {
    setSelectSeat({
      selectSeat: [],
    });
  };

  const handlePayment = () => {
    if (!selectSeat.length) {
      alert("Please select your seat");
    } else {
      const setData = {
        ...data,
        seat: selectSeat,
      };
      history.push("/payment", setData);
    }
  };

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
                <MovieSelect title={data?.movieId?.name} />
                <h5 className="content__heading">Choose Your Seat</h5>
                <Seats
                  seatAlpha={seatAlpha}
                  selectedSeat={selectedSeat}
                  reserved={reversedSeat}
                  selected={selectSeat}
                />
              </div>
              <div className="button__wrapper">
                <Button
                  className="btn btn__action change"
                  onClick={() => history.goBack()}
                >
                  Change your movie
                </Button>

                <Button
                  className="btn btn__action checkout"
                  onClick={handlePayment}
                >
                  Checkout now
                </Button>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="content__heading">Order Info</h5>
              <OrderInfo
                movieId={data?.movieId}
                timeSchedule={data?.timeSchedule}
                schedule={data?.schedule}
                dateSchedule={data?.dateSchedule}
              />
            </div>
          </div>
        </div>
      </section>
      <Sitelink />
    </>
  );
}
