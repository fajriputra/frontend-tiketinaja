import React from "react";
import { ReactComponent as IconClose } from "assets/images/icons/icon-close.svg";
import InputText from "components/UI/Form/InputText";
import Button from "components/UI/Button";
import Image from "components/Image";

import { formatAMPM } from "helpers/formatTime";

import "./schedule-form.scss";

export default function ScheduleForm(props) {
  const {
    movieId,
    location,
    price,
    dateStart,
    dateEnd,
    premier,
    dataPremier,
    handleClickPremier,
    handleTime,
    deleteTime,
    handleChangeInput,
    dataMovie,
    dataLocation,
    time,
    showInput,
    resetForm,
    handleSubmit,
    isUpdate,
    isLoading,
    onChange,
  } = props;

  return (
    <>
      <div className="schedule__form">
        <div className="form-group position-relative">
          <label htmlFor="movie" className="form-label">
            Movie
          </label>
          <select
            className="form__input select"
            name="movieId"
            value={movieId}
            onChange={onChange}
          >
            <option value="">Movie Name</option>
            {dataMovie.map((item) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group position-relative">
          <label htmlFor="location" className="form-label">
            Location
          </label>

          <select
            className="form__input select"
            name="location"
            value={location}
            onChange={onChange}
          >
            <option value="location">Location</option>
            {dataLocation.map((item) => (
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
            value={price}
            onChange={onChange}
          />
        </div>
        <div className="date__startend">
          <div className="form-group position-relative">
            <label htmlFor="dateStart" className="form-label">
              Date Start
            </label>
            <InputText
              type="date"
              name="dateStart"
              placeholder="Date Start"
              value={dateStart}
              onChange={onChange}
            />
          </div>
          <div className="form-group position-relative">
            <label htmlFor="dateEnd" className="form-label">
              Date End
            </label>
            <InputText
              type="date"
              name="dateEnd"
              placeholder="Date End"
              value={dateEnd}
              onChange={onChange}
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
            {dataPremier.map((item) => {
              return (
                <div key={item.id}>
                  <Button
                    className={`btn btn__sponsor ${
                      item.premier === premier ? "active" : ""
                    } p-0`}
                    onClick={() => handleClickPremier(item.premier)}
                  >
                    <Image
                      srcImage={item.image}
                      altImage={item.premier}
                      className="sponsor__image"
                      imgClass="img-contain"
                    />
                  </Button>
                </div>
              );
            })}
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
            {!showInput ? (
              <Button
                className="btn btn__add--time p-0"
                onClick={handleChangeInput}
              >
                +
              </Button>
            ) : (
              <InputText
                type="time"
                name="add__time"
                placeholder="Input a time"
                onKeyPress={handleTime}
              />
            )}

            {time.map((item, index) => {
              return (
                <div className="time position-relative" key={index}>
                  <Button className="btn btn__time p-0">
                    {formatAMPM(item)}
                  </Button>
                  <IconClose
                    width={15}
                    height={15}
                    style={{ position: "absolute", top: "-0.625rem" }}
                    onClick={() => deleteTime(item, index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Button
          className="btn btn__action--admin reset"
          isPrimary
          onClick={resetForm}
        >
          Reset
        </Button>
        <Button
          className="btn btn__action--admin submit"
          isPrimary
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          {isUpdate}
        </Button>
      </div>
    </>
  );
}
