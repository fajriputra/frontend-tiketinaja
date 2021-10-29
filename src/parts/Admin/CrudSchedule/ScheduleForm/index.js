import React from "react";

import { useForm } from "react-hook-form";
import InputText from "components/UI/Form/InputText";

import Sponsor1 from "assets/images/sponsor/logo-ebvid.png";
import Sponsor2 from "assets/images/sponsor/logo-cineone.png";
import Sponsor3 from "assets/images/sponsor/logo-hiflix.png";

import "./schedule-form.scss";
import Button from "components/UI/Button";
import InputSelect from "components/UI/Form/InputSelect";
import Image from "components/Image";

export default function ScheduleForm(props) {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    trigger,
    // reset,
  } = useForm();

  return (
    <>
      <div className="schedule__form">
        <div className="form-group position-relative">
          <label htmlFor="movie" className="form-label">
            Movie
          </label>
          <InputSelect className="form__input" />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <InputSelect className="form__input" />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="director" className="form-label">
            Price
          </label>
          <InputText
            inputClassName={`${errors?.director && "invalid"} form__input`}
            type="number"
            name="price"
            placeholder="Price"
            {...register("price", {
              required: "Price is required",
              minLength: {
                value: 3,
                message: "Price must be at least 3 characters",
              },
            })}
            onKeyUp={() => {
              trigger("price");
            }}
          />
          {errors?.price && (
            <p className="error-helpers">{errors?.price?.message}</p>
          )}
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
            />
          </div>
        </div>

        <div className="form-group position-relative d-flex flex-column">
          <label
            htmlFor="director"
            className="form-label"
            style={{ marginBottom: 12 }}
          >
            Price
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

            <div className="time">
              <Button className="btn btn__time p-0">08:30am</Button>
            </div>
            <div className="time">
              <Button className="btn btn__time p-0">08:30am</Button>
            </div>
            <div className="time">
              <Button className="btn btn__time p-0">08:30am</Button>
            </div>
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
