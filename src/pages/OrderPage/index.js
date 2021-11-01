import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BounceLoader } from "react-spinners";

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

  const movieId = props.location.state ? props.location.state.movieId : "";
  const schedule = props.location.state ? props.location.state.schedule : "";
  const timeSchedule = props.location.state
    ? props.location.state.timeSchedule
    : "";
  const dateSchedule = props.location.state
    ? props.location.state.dateSchedule
    : "";

  const [loading, setLoading] = useState(false);
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
    document.title = "Ticketing | Order";
    window.scrollTo(0, 0);

    const getDataSeatBooking = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `/booking/seat?movieId=${schedule?.movieId}&scheduleId=${schedule?.id}&dateSchedule=${dateSchedule}&timeSchedule=${timeSchedule}`
        );

        const { data } = res.data;

        const seat = data?.map((item) => item.seat);

        setReversedSeat(seat);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        new Error(err.response.data.message);
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

  if (loading) {
    return (
      <div className="loading__spinners">
        <BounceLoader color="#5f2eea" />
      </div>
    );
  }

  return (
    <>
      {!props.location.state ? (
        <div className="page-error">
          <h5>Kamu belum memilih movie nich, pilih dulu yu baru order!</h5>
          <Button className="btn" isPrimary onClick={() => history.goBack()}>
            balik
          </Button>
        </div>
      ) : (
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
                    <Button
                      className="btn btn__action change"
                      onClick={resetSeat}
                    >
                      Reset seat
                    </Button>
                    <Button
                      className="btn btn__action checkout mb-4 mb-md-0"
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
      )}
    </>
  );
}
