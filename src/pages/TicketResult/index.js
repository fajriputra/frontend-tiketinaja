import React, { useEffect } from "react";

import { ReactComponent as IconDownload } from "assets/images/icons/icon-download.svg";
import { ReactComponent as IconPrint } from "assets/images/icons/icon-print.svg";
import LogoTickitz from "assets/images/logo-tickitz-white.png";

import Header from "components/Header";
import Sitelink from "components/Sitelink";
import Card from "components/Card";
import Image from "components/Image";

import useScrollTop from "hooks/useScrollTop";

import "./ticket-result.scss";
import Button from "components/UI/Button";

export default function Homepage(props) {
  useScrollTop();

  useEffect(() => {
    document.title = "Ticketing | Ticket Result";
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header {...props} className="mb-0" />
      <section className="ticket__result d-none d-md-block">
        <div className="container">
          <div className="ticket__result--cardout d-none d-md-block">
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
                            Spider-Man: Homecoming
                          </h5>
                        </div>
                        <div className="info__detail--wrapper">
                          <div className="info__detail--content">
                            <p className="ticket__movie--title">Date</p>
                            <h5 className="ticket__movie--subtitle">07 July</h5>
                          </div>
                          <div className="info__detail--content">
                            <p className="ticket__movie--title">Time</p>
                            <h5 className="ticket__movie--subtitle">02:00pm</h5>
                          </div>
                          <div className="info__detail--content">
                            <p className="ticket__movie--title">Count</p>
                            <h5 className="ticket__movie--subtitle">
                              3 pieces
                            </h5>
                          </div>
                          <div className="info__detail--content">
                            <p className="ticket__movie--title">Seats</p>
                            <h5 className="ticket__movie--subtitle">
                              C4, C5, C6
                            </h5>
                          </div>
                          <div className="info__detail--content">
                            <p className="ticket__movie--title">Price</p>
                            <h5 className="ticket__movie--subtitle">$30.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="circle bottom rounded-circle"></div>
                  </Card>
                </Card>
                <div className="button__wrapper">
                  <Button className="btn btn__download me-3">
                    <IconDownload className="icon__action" />
                    <span className="text">Download</span>
                  </Button>
                  <Button className="btn btn__print">
                    <IconPrint className="icon__action" />
                    <span className="text">Print</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ticket mobile */}

      {/* <section className="ticket__result--mobile d-block d-md-none">
<div className="container">
<div className="ticket__result"></div>
</div>
</section> */}
      <Sitelink />
    </>
  );
}
