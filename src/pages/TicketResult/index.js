import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

import { ReactComponent as IconDownload } from "assets/images/icons/icon-download.svg";
import LogoTickitz from "assets/images/logo-tickitz-white.png";

import Header from "components/Header";
import Sitelink from "components/Sitelink";
import Card from "components/Card";
import Image from "components/Image";

import useScrollTop from "hooks/useScrollTop";
import axios from "helpers/axios";
import Button from "components/UI/Button";
import { getOnlyDateMonth } from "helpers/formatDate";
import { formatAMPM } from "helpers/formatTime";
import { formatRp } from "helpers/formatRp";
import { toast } from "react-toastify";
import { apiHost } from "config";
import { BounceLoader } from "react-spinners";

import "./ticket-result.scss";

export default function TicketResult(props) {
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [dataBooking, setDataBooking] = useState({});

  const seats = dataBooking ? dataBooking.seat?.map((item) => item) : {};

  useScrollTop();

  useEffect(() => {
    document.title = "Ticketing | Ticket Result";
    window.scrollTo(0, 0);
    setLoading(true);
    axios
      .get(`booking/${props.match.params.bookingId}`)
      .then((res) => {
        setDataBooking(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props.match.params.bookingId]);

  const handlePdf = () => {
    setSpinner(true);

    axios
      .get(`/booking/export-ticket/${dataBooking.id}`)
      .then((res) => {
        toast.success(res.data.message);

        window.open(`${res.data.data.url}`, "_blank", "noopener noreferrer");
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
      <Header {...props} className="mb-0" />
      <section className="ticket__result">
        <div className="container">
          {/* ticket mobile responsive */}
          <div className="ticket__item--mobile d-block d-lg-none py-5">
            <div className="ticket__item--mobile--header row">
              <div className="col-12 text-center">
                <QRCode
                  value={`${apiHost}/booking/status-ticket/${dataBooking.id}`}
                  size={130}
                />
              </div>
            </div>
            <div className="ticket__item--mobile--content row">
              <div className="col-6 mb-3">
                <p className="ticket__movie--title">Movie</p>
                <h5 className="ticket__movie--subtitle">{dataBooking.name}</h5>
              </div>
              <div className="col-6 mb-3">
                <p className="ticket__movie--title">Date</p>
                <h5 className="ticket__movie--subtitle">
                  {getOnlyDateMonth(dataBooking.dateBooking)}
                </h5>
              </div>
              <div className="col-6 mb-3">
                <p className="ticket__movie--title">Time</p>
                <h5 className="ticket__movie--subtitle">
                  {formatAMPM(dataBooking.timeBooking?.slice(0, 5))}
                </h5>
              </div>
              <div className="col-6 mb-3">
                <p className="ticket__movie--title">Count</p>
                <h5 className="ticket__movie--subtitle">
                  {dataBooking.totalTicket} pieces
                </h5>
              </div>
              <div className="col-6 mb-3">
                <p className="ticket__movie--title">Seats</p>
                <h5 className="ticket__movie--subtitle">{seats?.join(", ")}</h5>
              </div>
              <div className="col-12">
                <div className="d-flex justify-content-between ticket__item--mobile--total">
                  <p className="ticket__movie--title">Price</p>
                  <h5 className="ticket__movie--subtitle mb-0">
                    {formatRp(dataBooking.totalPayment)}
                  </h5>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button
                className="btn btn__download"
                onClick={handlePdf}
                isLoading={spinner}
              >
                <IconDownload className="icon__action" />
                <span className="text">Download</span>
              </Button>
            </div>
          </div>
        </div>

        {/* desktop */}
        <div className="ticket__result--cardout d-none d-lg-block">
          <Card className="inner__card">
            <div className="inner__card--content">
              <h5 className="content__ticket--heading">Proof of Payment</h5>

              <Card className="ticket__content--outter">
                <Card className="ticket__content--inner">
                  <div className="circle top rounded-circle"></div>

                  <div className="ticket__content--head">
                    <Image
                      srcImage={LogoTickitz}
                      altImage="Logo brand"
                      className="ticket__logo--image"
                      imgClass="img-cover"
                    />
                    <p className="ticket__content--text">Admit One</p>
                    <div className="d-flex justify-content-end align-items-center">
                      <Image
                        srcImage={LogoTickitz}
                        altImage="Logo brand"
                        className="ticket__logo--image"
                        imgClass="img-cover"
                      />
                    </div>
                  </div>
                  <div className="ticket__content--body">
                    <div className="ticket__movie--info">
                      <div className="info__name">
                        <p className="ticket__movie--title">Movie</p>
                        <h5 className="ticket__movie--subtitle">
                          {dataBooking.name}
                        </h5>
                      </div>
                      <div className="info__detail--wrapper">
                        <div className="info__detail--content">
                          <p className="ticket__movie--title">Date</p>
                          <h5 className="ticket__movie--subtitle">
                            {getOnlyDateMonth(dataBooking.dateBooking)}
                          </h5>
                        </div>
                        <div className="info__detail--content">
                          <p className="ticket__movie--title">Time</p>
                          <h5 className="ticket__movie--subtitle">
                            {formatAMPM(dataBooking.timeBooking?.slice(0, 5))}
                          </h5>
                        </div>
                        <div className="info__detail--content">
                          <p className="ticket__movie--title">Count</p>
                          <h5 className="ticket__movie--subtitle">
                            {dataBooking.totalTicket} pieces
                          </h5>
                        </div>
                        <div className="info__detail--content">
                          <p className="ticket__movie--title">Seats</p>
                          <h5 className="ticket__movie--subtitle">
                            {seats?.join(", ")}
                          </h5>
                        </div>
                        <div className="info__detail--content">
                          <p className="ticket__movie--title">Price</p>
                          <h5 className="ticket__movie--subtitle">
                            {formatRp(dataBooking.totalPayment)}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="qr__code">
                      <QRCode
                        value={`${apiHost}/booking/status-ticket/${dataBooking.id}`}
                        size={130}
                      />
                    </div>
                  </div>
                  <div className="circle bottom rounded-circle"></div>
                </Card>
              </Card>
              <div className="text-center">
                <Button
                  className="btn btn__download"
                  onClick={handlePdf}
                  isLoading={spinner}
                >
                  <IconDownload className="icon__action" />
                  <span className="text">Download</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <Sitelink />
    </>
  );
}
