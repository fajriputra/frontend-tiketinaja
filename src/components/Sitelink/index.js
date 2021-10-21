import React from "react";

import { ReactComponent as IconFacebook } from "assets/images/icons/icon-fb-outline.svg";
import { ReactComponent as IconInstagram } from "assets/images/icons/icon-instagram.svg";
import { ReactComponent as IconTwitter } from "assets/images/icons/icon-twitter.svg";
import { ReactComponent as IconYoutube } from "assets/images/icons/icon-youtube.svg";

import LogoEbv from "assets/images/sponsor/logo-ebvid.png";
import LogoCine1 from "assets/images/sponsor/logo-cineone.png";
import LogoHiflix from "assets/images/sponsor/logo-hiflix.png";
import LogoFooter from "assets/images/logo-tickitz-blue.png";

import Button from "components/UI/Button";
import Image from "components/Image";

import "./sitelink.scss";
import Footer from "components/Footer";

const Sitelink = () => {
  return (
    <section className="sitelink">
      <div className="container">
        <div className="row">
          <div className="col-auto col-md-auto sitelink__logo">
            <Button type="link" href="/">
              <Image
                className="sitelink__logo--image"
                srcImage={LogoFooter}
                altImage="Logo Brand"
                imgClass="img-cover"
              />
            </Button>

            <div className="sitelink__info">
              <p>
                Stop waiting in line. Buy tickets <br />
                conveniently, watch movies quietly.
              </p>
            </div>
          </div>

          <div className="col-md-2 sitelink__list--wrapper">
            <h5>Explore</h5>
            <div className="list-group list-group-flush">
              <li className="list-group-item bg-transparent">
                <Button type="link" href="/cinema">
                  Cinemas
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button type="link" href="/all-movies">
                  Movies List
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button type="link" href="/ticket">
                  My Ticket
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button type="link" href="/notif">
                  Notification
                </Button>
              </li>
            </div>
          </div>

          <div className="col-md-2 sitelink__list--wrapper">
            <h5>Our Sponsor</h5>
            <div className="list-group list-group-flush">
              <li className="list-group-item bg-transparent">
                <Button type="link" href="/">
                  <Image
                    srcImage={LogoEbv}
                    altImage="Ebv.id"
                    className="sponsor__logo"
                    imgClass="img-contain"
                  />
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button type="link" href="/">
                  <Image
                    srcImage={LogoCine1}
                    altImage="CineOne21"
                    className="sponsor__logo"
                    imgClass="img-contain"
                  />
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button type="link" href="/">
                  <Image
                    srcImage={LogoHiflix}
                    altImage="Hiflix"
                    className="sponsor__logo"
                    imgClass="img-contain"
                  />
                </Button>
              </li>
            </div>
          </div>

          <div className="col-md-auto sitelink__list--wrapper">
            <h5>Follow us</h5>
            <div className="list-group list-group-flush">
              <li className="list-group-item bg-transparent">
                <Button type="link" href="#">
                  <IconFacebook className="icon-sosmed" />
                  <span className="ms-3">Tickitz Cinema id</span>
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button type="link" href="#">
                  <IconInstagram className="icon-sosmed" />
                  <span className="ms-3">tickitz.id</span>
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button type="link" href="#">
                  <IconTwitter className="icon-sosmed" />
                  <span className="ms-3">tickitz.id</span>
                </Button>
              </li>
              <li className="list-group-item bg-transparent">
                <Button type="link" href="#">
                  <IconYoutube className="icon-sosmed" />
                  <span className="ms-3">Tickitz Cinema id</span>
                </Button>
              </li>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Sitelink;
