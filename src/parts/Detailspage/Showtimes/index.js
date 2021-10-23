import React, { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

import EbvId from "assets/images/sponsor/logo-ebvid.png";
import CineOne from "assets/images/sponsor/logo-cineone.png";
import Hiflix from "assets/images/sponsor/logo-hiflix.png";

import InputText from "components/UI/Form/InputText";
import Card from "components/Card";
import Image from "components/Image";
import Button from "components/UI/Button";
import Pagination from "components/Pagination";

import axios from "helpers/axios";

import "./showtimes.scss";

const Showtimes = () => {
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const getSchedule = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/schedule`);

        const { data } = res.data;

        setSchedule(data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    };

    getSchedule();
  }, []);

  if (loading) {
    return (
      <div style={{ margin: "auto 50%" }}>
        <BounceLoader color="#5f2eea" />
      </div>
    );
  }

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
          {schedule?.map((item) => {
            return (
              <Card className="showtimes__list--card" key={item.id}>
                <div className="showtimes__head">
                  <Image
                    className="showtimes__wrapper--image"
                    srcImage={Hiflix}
                    altImage={item?.premier}
                    imgClass="img-cover"
                  />

                  <div className="showtimes__text">
                    <h5 className="showtimes__text--title">{item?.premier}</h5>
                    <p className="showtimes__text--subtitle">
                      {item?.location}
                    </p>
                  </div>
                </div>
                <hr className="line w-100" />

                <div className="showtimes__time">
                  {item?.time.map((tm, index) => {
                    return (
                      <div className="showtimes__time--content" key={index}>
                        <Button className="btn time__schedules p-0">
                          {tm}
                        </Button>
                      </div>
                    );
                  })}
                </div>

                <div className="showtimes__price">
                  <p className="showtimes__price--text">Price</p>
                  <p className="showtimes__price--seat">{item?.price}/seat</p>
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
            );
          })}
        </div>

        <Pagination />
      </div>
    </section>
  );
};

export default Showtimes;
