import React from "react";

import EbvId from "assets/images/sponsor/logo-ebvid.png";
import CineOne from "assets/images/sponsor/logo-cineone.png";
import Hiflix from "assets/images/sponsor/logo-hiflix.png";

import InputText from "components/UI/Form/InputText";
import Card from "components/Card";
import Image from "components/Image";
import Button from "components/UI/Button";
import Pagination from "components/Pagination";

import "./showtimes.scss";

const Showtimes = () => {
  return (
    <section className="showtimes">
      <div className="container">
        <div className="showtimes__heading">
          <h5 className="showtimes__heading--title">Showtimes and Tickets</h5>
        </div>

        <div className="d-flex justify-content-center flex-column flex-md-row input__wrapper">
          <div className="form-group me-md-3">
            <InputText
              type="date"
              name="date"
              placeholder="Set a date"
              inputClassName="input__control mb-3 mb-md-0"
            />
          </div>

          <select className="form-select input__control">
            <option defaultValue>Purwokerto</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="showtimes__list">
          <Card className="showtimes__list--card">
            <div className="showtimes__head">
              <Image
                className="showtimes__wrapper--image"
                srcImage={Hiflix}
                altImage="Ebv.id"
                imgClass="img-cover"
              />

              <div className="showtimes__text">
                <h5 className="showtimes__text--title">ebv.id</h5>
                <p className="showtimes__text--subtitle">
                  Whatever street No.12,
                  <span className="text__location">South Purwokerto</span>
                </p>
              </div>
            </div>
            <hr className="line w-100" />

            <div className="showtimes__time">
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
            </div>

            <div className="showtimes__price">
              <p className="showtimes__price--text">Price</p>
              <p className="showtimes__price--seat">$10.00/seat</p>
            </div>

            <Button
              className="btn btn-book w-100"
              type="link"
              href="/order"
              isPrimary
            >
              Book now
            </Button>
          </Card>
          <Card className="showtimes__list--card">
            <div className="showtimes__head">
              <Image
                className="showtimes__wrapper--image"
                srcImage={CineOne}
                altImage="Ebv.id"
                imgClass="img-cover"
              />

              <div className="showtimes__text">
                <h5 className="showtimes__text--title">ebv.id</h5>
                <p className="showtimes__text--subtitle">
                  Whatever street No.12,
                  <span className="text__location">South Purwokerto</span>
                </p>
              </div>
            </div>
            <hr className="line w-100" />

            <div className="showtimes__time">
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
            </div>

            <div className="showtimes__price">
              <p className="showtimes__price--text">Price</p>
              <p className="showtimes__price--seat">$10.00/seat</p>
            </div>

            <Button
              className="btn btn-book w-100"
              type="link"
              href="/order"
              isPrimary
            >
              Book now
            </Button>
          </Card>
          <Card className="showtimes__list--card">
            <div className="showtimes__head">
              <Image
                className="showtimes__wrapper--image"
                srcImage={EbvId}
                altImage="Ebv.id"
                imgClass="img-cover"
              />

              <div className="showtimes__text">
                <h5 className="showtimes__text--title">ebv.id</h5>
                <p className="showtimes__text--subtitle">
                  Whatever street No.12,
                  <span className="text__location">South Purwokerto</span>
                </p>
              </div>
            </div>
            <hr className="line w-100" />

            <div className="showtimes__time">
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
              <div className="showtimes__time--content">
                <Button className="btn time__schedules p-0">08:30am</Button>
              </div>
            </div>

            <div className="showtimes__price">
              <p className="showtimes__price--text">Price</p>
              <p className="showtimes__price--seat">$10.00/seat</p>
            </div>

            <Button
              className="btn btn-book w-100"
              type="link"
              href="/order"
              isPrimary
            >
              Book now
            </Button>
          </Card>
        </div>

        <Pagination />
      </div>
    </section>
  );
};

export default Showtimes;
