import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BounceLoader } from "react-spinners";
import { useHistory } from "react-router-dom";

import ebvid from "assets/images/sponsor/logo-ebvid.png";
import cineone21 from "assets/images/sponsor/logo-cineone.png";
import hiflix from "assets/images/sponsor/logo-hiflix.png";

import InputText from "components/UI/Form/InputText";
import Card from "components/Card";
import Image from "components/Image";
import Button from "components/UI/Button";

import "./showtimes.scss";
import InputSelect from "components/UI/Form/InputSelect";
import { formatAMPM } from "helpers/formatTime";
import { formatRp } from "helpers/formatRp";
import { getSchedule } from "store/admin/schedule/action";
import ReactPaginate from "react-paginate";
import { getLocation } from "store/location/action";

const date = new Date().toISOString().split("T")[0];

const Showtimes = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { movieId } = props;

  const [querySchedule, setQuerySchedule] = useState({
    page: 1,
    limit: 6,
    movieId: "",
    location: "",
    sortType: "asc",
  });

  const [loading, setLoading] = useState(false);

  const location = useSelector((state) => state.location);
  const schedule = useSelector((state) => state.schedule);

  const [timeSchedule, setTimeSchedule] = useState("");
  const [dateSchedule, setDateSchedule] = useState(date);
  const [filtered, setFiltered] = useState(schedule.data);

  useEffect(() => {
    // setLoading(true);
    dispatch(getLocation());
    dispatch(
      getSchedule(
        querySchedule.page,
        querySchedule.limit,
        querySchedule.movieId,
        querySchedule.location,
        querySchedule.sortType
      )
    );
  }, [
    dispatch,
    querySchedule.page,
    querySchedule.limit,
    querySchedule.movieId,
    querySchedule.location,
    querySchedule.sortType,
  ]);

  const handleBooking = (data) => {
    history.push("/order", {
      movieId,
      schedule: { ...data, movieId: movieId[0].id },
      dateSchedule,
      timeSchedule: timeSchedule.timeSchedule,
    });
  };

  const handleChangeLocation = (e) => {
    const terfilter = e.target.value;
    setQuerySchedule({ ...querySchedule, location: terfilter, page: 1 });

    dispatch(
      getSchedule(
        1,
        querySchedule.limit,
        querySchedule.movieId,
        terfilter,
        querySchedule.sortType
      )
    ).then((res) => {
      setFiltered(res.value.data.data);
      history.push(`?location=${terfilter}`);
    });
  };

  const handleTime = (data, scheduleId) => {
    setTimeSchedule({
      scheduleId,
      timeSchedule: data,
    });
  };

  const handlePagination = (e) => {
    const selected = e.selected + 1;
    setQuerySchedule({ ...querySchedule, page: selected });

    dispatch(
      getSchedule(
        selected,
        querySchedule.limit,
        querySchedule.movieId,
        querySchedule.location,
        querySchedule.sortType
      )
    ).then((res) => {
      setFiltered(res.value.data.data);
      history.push(`?page=${selected}&limit=${querySchedule.limit}`);
    });
  };

  if (loading) {
    return (
      <div style={{ margin: "5% 50%", paddingBottom: 100 }}>
        <BounceLoader color="#5f2eea" />
      </div>
    );
  }

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
            selectDefault="Select Location"
            className="input__control"
            options={location.data.map((loc) => ({
              value: loc.nama,
              label: loc.nama,
            }))}
            isDisabled={!location.data.length}
            onChange={handleChangeLocation}
            name="location"
            value={querySchedule.location}
          />
        </div>

        {filtered.length === 0 ? (
          <h5 className="text-center">
            Schedule is not available at {querySchedule.location}
          </h5>
        ) : (
          <div className="showtimes__list">
            {filtered.map((item) => {
              return (
                <Card className="showtimes__list--card" key={item.id}>
                  <div className="showtimes__head">
                    <Image
                      className="showtimes__wrapper--image"
                      srcImage={
                        item.premier === "CineOne21"
                          ? cineone21
                          : item.premier === "ebv.id"
                          ? ebvid
                          : item.premier === "hiflix Cinema"
                          ? hiflix
                          : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      }
                      altImage={item.premier}
                      imgClass="img-cover"
                    />

                    <div className="showtimes__text">
                      <h5 className="showtimes__text--title">
                        {item?.premier}
                      </h5>
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
                            className={`btn time__schedules p-0 ${
                              item.id === timeSchedule.scheduleId &&
                              tm === timeSchedule.timeSchedule &&
                              "active"
                            }`}
                            onClick={() => handleTime(tm, item.id)}
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
                    style={{
                      opacity: `${
                        item.id === timeSchedule.scheduleId ? 1 : 0.5
                      }`,
                    }}
                    isDisabled={item.id !== timeSchedule.scheduleId}
                    isPrimary
                    onClick={() => handleBooking(item)}
                  >
                    Book now
                  </Button>
                </Card>
              );
            })}
          </div>
        )}

        <div className="d-flex justify-content-center align-items-center">
          <ReactPaginate
            previousLabel={false}
            nextLabel={false}
            breakLabel={"..."}
            forcePage={querySchedule.page - 1}
            pageCount={schedule.pageInfo.totalData}
            onPageChange={handlePagination}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </section>
  );
};

export default Showtimes;
