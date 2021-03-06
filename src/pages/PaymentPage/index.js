import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Header from "components/Header";
import Sitelink from "components/Sitelink";
import Card from "components/Card";
import useScrollTop from "hooks/useScrollTop";
import Button from "components/UI/Button";
import PaymentInfo from "parts/Payment/PaymentInfo";
import PersonalInfo from "parts/Payment/PersonalInfo";
import TotalMobile from "parts/Payment/TotalMobile";

import axios from "helpers/axios";

import "./payment.scss";

export default function PaymentPage(props) {
  useScrollTop();

  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { userData } = useSelector((state) => state.user);

  const dateSchedule = props.location.state
    ? props.location.state.dateSchedule
    : "";
  const movieId = props.location.state ? props.location.state.movieId : "";
  const schedule = props.location.state ? props.location.state.schedule : "";
  const seat = props.location.state ? props.location.state.seat : "";
  const timeSchedule = props.location.state
    ? props.location.state.timeSchedule
    : "";

  useEffect(() => {
    document.title = "Ticketing | Payment";
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handlePayOrder = () => {
    setSpinner(true);
    const postBooking = {
      dateBooking: dateSchedule,
      movieId: movieId[0].id,
      scheduleId: schedule?.id,
      seat,
      timeBooking: timeSchedule,
    };

    axios
      .post("/booking", postBooking)
      .then((res) => {
        window.location.assign(`${res.data.data.urlRedirect}`);
      })
      .finally(() => {
        setSpinner(false);
      });
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
          <h5 className="mb-4">
            You don't have a payment yet, choose a movie first!
          </h5>
          <Button className="btn" isPrimary onClick={() => history.push("/")}>
            Back to Home
          </Button>
        </div>
      ) : (
        <>
          <Header {...props} className="mb-0 mb-md-4" />
          <section className="content__payment">
            <TotalMobile seats={seat} schedule={schedule} />
            <div className="container">
              <div className="row">
                <div className="col-md-8 order-2 order-lg-1">
                  <h5 className="content__heading d-none d-md-block">
                    Payment Info
                  </h5>
                  <Card className="content__payment--info d-none d-md-block">
                    <PaymentInfo
                      dateSchedule={dateSchedule}
                      movieId={movieId}
                      schedule={schedule}
                      seats={seat}
                      timeSchedule={timeSchedule}
                    />
                  </Card>
                  <div className="button__wrapper order-2 order-lg-1">
                    <Button
                      className="btn btn__action prev"
                      onClick={() => history.goBack()}
                    >
                      Previous Step
                    </Button>
                    <Button
                      className="btn btn__action order"
                      onClick={handlePayOrder}
                      isLoading={spinner}
                    >
                      Pay your order
                    </Button>
                  </div>
                </div>
                <div className="col-md-4 order-1 order-lg-2">
                  <h5 className="content__heading">Personal Info</h5>
                  <Card className="content__info--person mb-4 mb-lg-0">
                    <PersonalInfo data={userData} isDisabled={userData} />
                  </Card>
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
