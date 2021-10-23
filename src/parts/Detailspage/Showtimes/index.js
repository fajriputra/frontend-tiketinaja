import React, { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

import Hiflix from "assets/images/sponsor/logo-hiflix.png";

import InputText from "components/UI/Form/InputText";
import Card from "components/Card";
import Image from "components/Image";
import Button from "components/UI/Button";
import Pagination from "components/Pagination";

import axios from "helpers/axios";

import "./showtimes.scss";
import InputSelect from "components/UI/Form/InputSelect";
import { formatAMPM } from "helpers/formatTime";

const Showtimes = () => {
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [value, setValue] = useState("");
  const [location, setLocation] = useState([]);
  const [allLocation, setAllLocation] = useState(false);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getSchedule = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/schedule?location=${value}`);

        const { data, pagination } = res.data;

        setSchedule(data);
        setPagination(pagination);

        if (!allLocation) {
          setAllLocation(true);
          setLocation([
            {
              id: "",
              value: "All Location",
            },
            ...data?.map((item) => ({
              id: item.location,
              value: item.location,
            })),
          ]);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    };
    getSchedule();

    return () => setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, page]);

  if (loading) {
    return (
      <div style={{ margin: "5% 50%", paddingBottom: 100 }}>
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

          <InputSelect
            className="input__control"
            options={location}
            isDisabled={!location.length}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>

        {!schedule ? (
          <div className="text-center">Schedule belum tersedia</div>
        ) : null}

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
                          {tm >= 12 ? `${tm}pm` : `${tm}am`}
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

        <Pagination pagination={pagination} page={page} setPage={setPage} />
      </div>
    </section>
  );
};

export default Showtimes;
