import React from "react";
import { useHistory } from "react-router-dom";

import Header from "components/Header";
import Sitelink from "components/Sitelink";

import Card from "components/Card";
import useScrollTop from "hooks/useScrollTop";
import PaymentInfo from "parts/Payment/PaymentInfo";
import Button from "components/UI/Button";

import "./payment.scss";
import PersonalInfo from "parts/Payment/PersonalInfo";
import TotalMobile from "parts/Payment/TotalMobile";

export default function PaymentPage(props) {
  useScrollTop();

  const history = useHistory();

  return (
    <>
      <Header {...props} className="mb-0 mb-md-4" />
      <section className="content__payment">
        <TotalMobile />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h5 className="content__heading d-none d-md-block">
                Payment Info
              </h5>
              <Card className="content__payment--info d-none d-md-block">
                <PaymentInfo />
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
                  // onClick={() => history.push("/pay")}
                >
                  Pay your order
                </Button>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="content__heading">Personal Info</h5>
              <Card className="content__info--person">
                <PersonalInfo />
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Sitelink />
    </>
  );
}
