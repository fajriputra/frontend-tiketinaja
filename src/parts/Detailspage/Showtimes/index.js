import React, { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { useHistory } from "react-router-dom";

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
import { formatRp } from "helpers/formatRp";

const date = new Date().toISOString().split("T")[0];

const Showtimes = (props) => {
  const history = useHistory();
  const { movieId } = props;

  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);

  const [timeSchedule, setTimeSchedule] = useState("");
  const [dateSchedule, setDateSchedule] = useState(date);

  const [value, setValue] = useState("");
  const [location, setLocation] = useState([]);

  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getSchedule = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/schedule?page=${page}&location=${value}`);

        const { data, pagination } = res.data;

        setSchedule(data);
        setPagination(pagination);

        if (value === "") {
          setLocation([
            { id: "", value: "All Location" },
            ...data?.map((dt) => ({
              id: dt.location,
              value: dt.location,
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

  const handleBooking = (data) => {
    history.push("/order", {
      movieId: movieId[0],
      schedule: data,
      dateSchedule,
      timeSchedule: timeSchedule.timeSchedule,
    });
  };

  const handleTime = (data) => {
    setTimeSchedule({
      timeSchedule: data,
    });
  };

  return (
    <section className="showtimes" id={props.movieId}>
      <div className="container">
        <div className="showtimes__heading">
          <h5 className="showtimes__heading--title">Showtimes and Tickets</h5>
        </div>

        <div className="d-flex justify-content-center flex-column flex-md-row input__wrapper">
          <div className="form-group me-md-3">
            <InputText
              type="date"
              name="date"
              value={dateSchedule}
              onChange={(e) => setDateSchedule(e.target.value)}
              placeholder="Set a date"
              inputClassName="input__control mb-3 mb-md-0"
            />
          </div>

          <InputSelect
            className="input__control"
            options={location?.map((loc) => loc)}
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
                        <Button
                          className={[
                            "btn time__schedules p-0",
                            handleTime === index ? "active" : "",
                          ].join(" ")}
                          onClick={() => handleTime(tm)}
                        >
                          {formatAMPM(tm)}
                        </Button>
                      </div>
                    );
                  })}
                </div>

                <div className="showtimes__price">
                  <p className="showtimes__price--text">Price</p>
                  <p className="showtimes__price--seat">
                    {formatRp(item?.price)}/seat
                  </p>
                </div>

                <Button
                  className="btn btn-book w-100"
                  isPrimary
                  onClick={() => handleBooking(item)}
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
