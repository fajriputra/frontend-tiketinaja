import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";

import ebvid from "assets/images/sponsor/logo-ebvid.png";
import cineone21 from "assets/images/sponsor/logo-cineone.png";
import hiflix from "assets/images/sponsor/logo-hiflix.png";

import Card from "components/Card";
import Header from "components/Header";
import CrudImage from "parts/Admin/CrudMovie/CrudImage";
import Sitelink from "components/Sitelink";
import InputSelect from "components/UI/Form/InputSelect";
import Image from "components/Image";
import Button from "components/UI/Button";

import axios from "helpers/axios";
import ScheduleForm from "parts/Admin/CrudSchedule/ScheduleForm";
import { formatAMPM } from "helpers/formatTime";
import { getLocation } from "store/location/action";
import { getMovie, getMovieById } from "store/admin/movie/action";
import {
  deleteSchedule,
  getSchedule,
  updateSchedule,
} from "store/admin/schedule/action";
// import Pagination from "components/Pagination";

import "./schedule.scss";
import { toast } from "react-toastify";
import { formatRp } from "helpers/formatRp";
import ReactPaginate from "react-paginate";

const initialState = {
  movieId: "",
  location: "",
  price: 0,
  dateStart: "",
  dateEnd: "",
  premier: "",
  time: [],
};

const dataPremier = [
  { id: 1, premier: "CineOne21", image: cineone21 },
  { id: 2, premier: "hiflix Cinema", image: hiflix },
  { id: 3, premier: "ebv.id", image: ebvid },
];

export default function Schedule(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const schedule = useSelector((state) => state.schedule);
  const movie = useSelector((state) => state.movie);
  const location = useSelector((state) => state.location);

  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [scheduleId, setScheduleId] = useState("");
  const [form, setForm] = useState(initialState);
  const [filtered, setFiltered] = useState(schedule.data);
  // const [imagePreview, setImagePreview] = useState("");
  const [queryMovie, setQueryMovie] = useState({
    page: 1,
    limit: 5000,
    keyword: "",
    month: "",
    sortBy: "name",
    sortType: "asc",
  });
  const [querySchedule, setQuerySchedule] = useState({
    page: 1,
    limit: 6,
    movieId: "",
    location: "",
    sortType: "asc",
  });

  useEffect(() => {
    dispatch(
      getMovie(
        queryMovie.page,
        queryMovie.limit,
        queryMovie.keyword,
        queryMovie.month,
        queryMovie.sortBy,
        queryMovie.sortType
      )
    );
    dispatch(getLocation());
    // dispatch(getMovieById(form.movieId));
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
    queryMovie.page,
    queryMovie.limit,
    queryMovie.keyword,
    queryMovie.month,
    queryMovie.sortBy,
    queryMovie.sortType,
  ]);

  useEffect(() => {
    document.title = "Ticketing | Schedule";
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // setImagePreview(e.target.value && movie.dataById[0].image);
  };

  const resetForm = () => {
    setForm(initialState);
    // setImage("");
    setShowInput(false);
    setIsUpdate(false);
  };

  const handleChangeInput = () => setShowInput(!showInput);

  const handleClickPremier = (data) => {
    setForm({ ...form, premier: data });
  };

  const handleTime = (e) => {
    if (e.key === "Enter") {
      setForm({ ...form, time: [...form.time, e.target.value] });
      setShowInput(false);
    }
  };

  const handleSortPrice = (e) => {
    const terfilter = e.target.value;
    setQuerySchedule({ ...querySchedule, sortType: terfilter, page: 1 });

    dispatch(
      getSchedule(
        1,
        querySchedule.limit,
        querySchedule.movieId,
        querySchedule.location,
        terfilter
      )
    ).then((res) => {
      setFiltered(res.value.data.data);

      history.push(`?sortType=${terfilter}`);
    });
  };

  const handleSortLocation = (e) => {
    const terfilter = e.target.value;
    setQuerySchedule({
      ...querySchedule,
      location: terfilter,
      page: 1,
    });
    dispatch(
      getSchedule(1, querySchedule.limit, querySchedule.movieId, terfilter)
    ).then((res) => {
      setFiltered(res.value.data.data);

      history.push(`?location=${terfilter}`);
    });
  };

  const handleSortMovie = (e) => {
    const terfilter = e.target.value;
    setQuerySchedule({ ...querySchedule, movieId: terfilter, page: 1 });
    dispatch(
      getSchedule(
        1,
        querySchedule.limit,
        terfilter,
        querySchedule.location,
        querySchedule.sortType
      )
    ).then((res) => {
      setFiltered(res.value.data.data);

      history.push(`?movieId=${terfilter}`);
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

  const handleSubmit = () => {
    const setData = {
      ...form,
      time: form.time.join(", "),
    };
    setSpinner(true);
    // setLoading(true);

    axios
      .post("/schedule", setData)
      .then((res) => {
        toast.success(res.data.message);

        dispatch(
          getSchedule(
            querySchedule.page,
            querySchedule.limit,
            querySchedule.movieId,
            querySchedule.location,
            querySchedule.sortType
          )
        );
      })
      .catch((err) => {
        err.response.data.message && toast.error(err.response.data.message);
      })
      .finally(() => {
        // setLoading(false);
        setSpinner(false);
        resetForm();
      });
  };

  const setUpdate = (data) => {
    setScheduleId(data.id);
    setForm({
      ...form,
      movieId: data.movieId,
      location: data.location,
      price: data.price,
      dateStart: data.dateStart.slice(0, 10),
      dateEnd: data.dateEnd.slice(0, 10),
      premier: data.premier,
      time: data.time,
    });
    setIsUpdate(true);
  };

  const handleUpdate = () => {
    // const formData = new FormData();

    // for (const data in form) {
    //   formData.append(data, form[data]);
    // }

    setLoading(true);

    dispatch(updateSchedule(scheduleId, form))
      .then((res) => {
        console.log(res);

        // toast.success(res.value.data.message);
        // setImage("");

        dispatch(
          getSchedule(
            querySchedule.page,
            querySchedule.limit,
            querySchedule.movieId,
            querySchedule.location,
            querySchedule.sortType
          )
        );
      })
      .catch((err) => {
        err.response.data.message && toast.error(err.response.data.message);
        setForm(initialState);
      })
      .finally(() => {
        setLoading(false);
        setForm(initialState);
      });
    resetForm();
  };

  const handleDelete = (id) => {
    const popup = window.confirm("Are you sure to delete this schedule?");

    if (popup) {
      dispatch(deleteSchedule(id)).then((res) => {
        toast.success(res.value.data.message);

        dispatch(
          getSchedule(
            querySchedule.page,
            querySchedule.limit,
            querySchedule.movieId,
            querySchedule.location,
            querySchedule.sortType
          )
        );
      });
    }
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
      <section className="schedule">
        <div className="container">
          <h5 className="content__heading">Form Schedule</h5>
          <Card className="crud__card--schedule">
            <div className="d-flex">
              <CrudImage
              // movieImage={
              //   imagePreview
              //     ? imagePreview
              //     : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
              // }
              />

              <div className="w-100">
                <ScheduleForm
                  movieId={form.movieId}
                  location={form.location}
                  price={form.price}
                  dateStart={form.dateStart}
                  dateEnd={form.dateEnd}
                  premier={form.premier}
                  dataPremier={dataPremier}
                  handleClickPremier={handleClickPremier}
                  time={form.time}
                  dataMovie={movie.data}
                  dataLocation={location.data}
                  showInput={handleChangeInput}
                  handleTime={handleTime}
                  handleChangeInput={handleChangeInput}
                  resetForm={resetForm}
                  handleSubmit={handleSubmit}
                  isLoading={spinner}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  handleSubmit={isUpdate ? handleUpdate : handleSubmit}
                  isUpdate={isUpdate ? "Update" : "Submit"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </Card>

          <div className="data__schedule--head">
            <h5 className="content__heading pb-0">Data Schedule</h5>
            <select
              name="price"
              className="form-select form__input select ms-auto me-3"
              onChange={handleSortPrice}
            >
              <option value="">Sort by price</option>
              <option value="asc">Lowest price</option>
              <option value="desc">Highest price</option>
            </select>
            <InputSelect
              className="form__input select me-3"
              selectDefault="Select Location"
              options={location.data.map((loc) => ({
                value: loc.nama,
                label: loc.nama,
              }))}
              name="location"
              onChange={handleSortLocation}
              value={querySchedule.location}
            />
            <InputSelect
              className="form__input select"
              selectDefault="Select Movie"
              options={movie.data.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
              name="movie"
              onChange={handleSortMovie}
              value={querySchedule.movieId}
            />
          </div>

          <Card className="card_wrapper--schedule">
            <div className="card__data--schedule position-relative">
              {filtered.length === 0 ? (
                <h5
                  style={{
                    margin: "auto",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Schedule is not available at{" "}
                  {querySchedule.location || querySchedule.movieId}
                </h5>
              ) : (
                filtered.map((item) => {
                  return (
                    <Card className="card__schedule--content" key={item.id}>
                      <div className="card__schedule--head">
                        <Image
                          className="data__schedule--image"
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

                        <div className="data__schedule__text">
                          <h5 className="data__schedule__text--title">
                            {item.premier}
                          </h5>
                          <p className="data__schedule__text--subtitle">
                            {item.location}
                          </p>
                        </div>
                      </div>
                      <hr className="line w-100" />

                      <div className="data__schedule__time">
                        {item.time.map((item, index) => {
                          return (
                            <div
                              className="data__schedule__time--content"
                              key={index}
                            >
                              <Button className="btn time__schedules p-0">
                                {formatAMPM(item)}
                              </Button>
                            </div>
                          );
                        })}
                      </div>

                      <div className="data__schedule--price">
                        <p className="data__schedule--text">Price</p>
                        <p className="data__schedule--seat">
                          {formatRp(item.price)}
                        </p>
                      </div>

                      <div className="d-flex align-items-center">
                        <Button
                          className="btn btn__admin update w-100 me-3"
                          onClick={() => setUpdate(item)}
                        >
                          Update
                        </Button>
                        <Button
                          className="btn btn__admin delete w-100"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card>
                  );
                })
              )}
            </div>
            {filtered.length === 0 ? null : (
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
            )}
          </Card>
        </div>
      </section>
      {/* <Pagination /> */}
      <Sitelink />
    </>
  );
}
