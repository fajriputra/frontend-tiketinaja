import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "components/Header";
import Sitelink from "components/Sitelink";
import Button from "components/UI/Button";

import MovieSelect from "parts/Orderpage/MovieSelect";
import OrderInfo from "parts/Orderpage/OrderInfo";
import Seats from "parts/Orderpage/Seats";

import axios from "helpers/axios";
import useScrollTop from "hooks/useScrollTop";

import "./order-page.scss";

export default function OrderPage(props) {
  useScrollTop();
  const history = useHistory();

  const { movieId, schedule, timeSchedule, dateSchedule } =
    props.location.state;

  const [seatAlpha, setSeatAlpha] = useState(["A", "B", "C"]);
  const [selectSeat, setSelectSeat] = useState([]);
  const [reversedSeat, setReversedSeat] = useState([]);

  const selectedSeat = (data) => {
    if (selectSeat.includes(data)) {
      const deleteSeat = selectSeat.filter((val) => {
        return val !== data;
      });
      setSelectSeat(deleteSeat);
    } else {
      setSelectSeat([...selectSeat, data]);
    }
  };

  useEffect(() => {
    const getDataSeatBooking = async () => {
      try {
        const res = await axios.get(
          `/booking/seat?movieId=${schedule?.movieId}&scheduleId=${schedule?.id}&dateSchedule=${dateSchedule}&timeSchedule=${timeSchedule}`
        );
        const { data } = res.data;

        const seat = data?.map((item) => item.seat);

        setReversedSeat(seat);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };

    getDataSeatBooking();
  }, [dateSchedule, schedule?.id, schedule?.movieId, timeSchedule]);

  const resetSeat = () => {
    setSelectSeat([]);
  };

  const handlePayment = () => {
    if (!selectSeat.length) {
      alert("Please select your seat");
    } else {
      const setData = {
        movieId,
        schedule,
        timeSchedule,
        dateSchedule,
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
                <MovieSelect title={movieId[0]?.name} />
                <h5 className="content__heading">Choose Your Seat</h5>
                <Seats
                  seatAlpha={seatAlpha}
                  selectedSeat={selectedSeat}
                  reserved={reversedSeat}
                  selected={selectSeat}
                />
              </div>
              <div className="button__wrapper">
                <Button className="btn btn__action change" onClick={resetSeat}>
                  Reset seat
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
                movieId={movieId[0]}
                timeSchedule={timeSchedule}
                schedule={schedule}
                dateSchedule={dateSchedule}
                seats={selectSeat}
              />
            </div>
          </div>
        </div>
      </section>
      <Sitelink />
    </>
  );
}
