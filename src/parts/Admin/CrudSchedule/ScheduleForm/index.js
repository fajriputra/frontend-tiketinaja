import React, { useEffect, useState } from "react";
import InputText from "components/UI/Form/InputText";

import Sponsor1 from "assets/images/sponsor/logo-ebvid.png";
import Sponsor2 from "assets/images/sponsor/logo-cineone.png";
import Sponsor3 from "assets/images/sponsor/logo-hiflix.png";

import "./schedule-form.scss";
import Button from "components/UI/Button";
import Image from "components/Image";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from "store/location/action";
import { getMovie } from "store/admin/movie/action";

export default function ScheduleForm(props) {
  const [dataMovie, setDataMovie] = useState({
    page: "",
    limit: "",
    keyword: "",
    sortBy: "",
    sortType: "",
  });

  const movie = useSelector((state) => state.movie);

  console.log(movie);

  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMovie(
        dataMovie.page,
        dataMovie.limit,
        dataMovie.keyword,
        dataMovie.sortBy,
        dataMovie.sortType
      )
    );
    dispatch(getLocation());
  }, [dispatch]);

  return (
    <>
      <div className="schedule__form">
        <div className="form-group position-relative">
          <label htmlFor="movie" className="form-label">
            Movie
          </label>
          <select
            name="sorting"
            className="form__input select"
            // onChange={handleSort}
          >
            <option value="movie">Movie Name</option>
            <option value="name asc">A-Z</option>
            <option value="name desc">Z-A</option>
          </select>
        </div>
        <div className="form-group position-relative">
          <label htmlFor="location" className="form-label">
            Location
          </label>

          <select
            name="sorting"
            className="form__input select"
            onChange={props.handleLocation}
          >
            <option value="location">Location</option>
            {location?.data?.map((item) => (
              <option value={item.nama} key={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group position-relative">
          <label htmlFor="director" className="form-label">
            Price
          </label>
          <InputText
            type="number"
            name="price"
            placeholder="Price"
            onChange={props.handleChange}
          />
        </div>
        <div className="date__startend">
          <div className="form-group position-relative">
            <label htmlFor="date__start" className="form-label">
              Date Start
            </label>
            <InputText
              type="date"
              name="date__start"
              placeholder="Date Start"
              onChange={props.handleChange}
            />
          </div>
          <div className="form-group position-relative">
            <label htmlFor="date__start" className="form-label">
              Date Start
            </label>
            <InputText
              type="date"
              name="date__start"
              placeholder="Date Start"
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="form-group position-relative d-flex flex-column">
          <label
            htmlFor="director"
            className="form-label"
            style={{ marginBottom: 12 }}
          >
            Cinema
          </label>

          <div className="d-flex justify-content-between">
            <Button className="btn btn__sponsor p-0">
              <Image
                srcImage={Sponsor1}
                altImage="Image Sponsor"
                className="sponsor__image"
                imgClass="img-contain"
              />
            </Button>
            <Button className="btn btn__sponsor p-0">
              <Image
                srcImage={Sponsor2}
                altImage="Image Sponsor"
                className="sponsor__image"
                imgClass="img-contain"
              />
            </Button>
            <Button className="btn btn__sponsor p-0">
              <Image
                srcImage={Sponsor3}
                altImage="Image Sponsor"
                className="sponsor__image"
                imgClass="img-contain"
              />
            </Button>
          </div>
        </div>

        <div className="form-group position-relative d-flex flex-column">
          <label
            htmlFor="director"
            className="form-label"
            style={{ marginBottom: 12 }}
          >
            Time
          </label>
          <div className="content__time">
            <Button className="btn btn__add--time p-0">+</Button>

            {/* <InputText name="add__time" placeholder="Input a time" /> */}

            <div className="time">
              <Button className="btn btn__time p-0">08:30am</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Button className="btn btn__action--admin reset" isPrimary>
          Reset
        </Button>
        <Button className="btn btn__action--admin submit" isPrimary>
          Submit
        </Button>
      </div>
    </>
  );
}
