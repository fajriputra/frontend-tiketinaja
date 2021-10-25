import React, { useState, useEffect } from "react";
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

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export default function PaymentPage(props) {
  useScrollTop();

  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState("");
  const [status, setStatus] = useState(statusList);
  const [dataBooking, setDataBooking] = useState([]);
  const history = useHistory();

  const { dateSchedule, movieId, schedule, seat, timeSchedule } =
    props.location.state;

  useEffect(() => {
    const getUserLogin = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/user");

        const { data } = res.data;

        setIsLogin(data);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err.response.data.message);
      }
    };

    getUserLogin();
  }, []);

  const handlePayOrder = async () => {
    setStatus(statusList.process);
    try {
      const postBooking = {
        dateBooking: dateSchedule,
        movieId: movieId[0]?.id,
        scheduleId: schedule?.id,
        seat,
        timeBooking: timeSchedule,
      };

      const res = await axios.post("/booking", postBooking);

      const { data } = res.data;

      window.open(`${data?.urlRedirect}`, "_blank", "noopener noreferrer");

      setDataBooking(data);

      history.push("/");

      setStatus(statusList.error);
    } catch (error) {
      console.log(error.response);
    }
    setStatus(statusList.success);
  };

  if (loading) {
    return (
      <div style={{ margin: "20% 50%" }}>
        <BounceLoader color="#5f2eea" />
      </div>
    );
  }

  return (
    <>
      <Header {...props} className="mb-0 mb-md-4" />
      <section className="content__payment">
        <TotalMobile seats={seat} schedule={schedule} />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
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
              <div className="button__wrapper d-none d-md-flex">
                <Button
                  className="btn btn__action prev"
                  onClick={() => history.goBack()}
                >
                  Previous Step
                </Button>
                <Button
                  className="btn btn__action order"
                  onClick={handlePayOrder}
                  isLoading={status === statusList.process}
                >
                  Pay your order
                </Button>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="content__heading">Personal Info</h5>
              <Card className="content__info--person">
                <PersonalInfo value={isLogin[0]} isDisabled={isLogin} />
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Sitelink />
    </>
  );
}
