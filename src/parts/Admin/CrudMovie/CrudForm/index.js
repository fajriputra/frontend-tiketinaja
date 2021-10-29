import React from "react";

import { useForm } from "react-hook-form";
import InputText from "components/UI/Form/InputText";

import "./crud-form.scss";
import Button from "components/UI/Button";

export default function CrudForm(props) {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    trigger,
    // reset,
  } = useForm();

  return (
    <>
      <div className="crud__form">
        <div className="form-group position-relative">
          <label htmlFor="movie" className="form-label">
            Movie Name
          </label>
          <InputText
            inputClassName={errors?.movie && "invalid"}
            type="text"
            name="movie"
            placeholder="Movie name"
            {...register("movie", {
              required: "Movie Name is required",
              minLength: {
                value: 3,
                message: "Movie Name must be at least 3 characters",
              },
            })}
            onKeyUp={() => {
              trigger("movie");
            }}
          />
          {errors?.movie && (
            <p className="error-helpers">{errors?.movie?.message}</p>
          )}
        </div>
        <div className="form-group position-relative">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <InputText
            inputClassName={errors?.category && "invalid"}
            type="text"
            name="category"
            placeholder="Category"
            {...register("category", {
              required: "Category is required",
              minLength: {
                value: 3,
                message: "Category must be at least 3 characters",
              },
            })}
            onKeyUp={() => {
              trigger("category");
            }}
          />
          {errors?.category && (
            <p className="error-helpers">{errors?.category?.message}</p>
          )}
        </div>
        <div className="form-group position-relative">
          <label htmlFor="director" className="form-label">
            Director
          </label>
          <InputText
            inputClassName={errors?.director && "invalid"}
            type="text"
            name="director"
            placeholder="Director"
            {...register("director", {
              required: "Director is required",
              minLength: {
                value: 3,
                message: "Director must be at least 3 characters",
              },
            })}
            onKeyUp={() => {
              trigger("director");
            }}
          />
          {errors?.director && (
            <p className="error-helpers">{errors?.director?.message}</p>
          )}
        </div>
        <div className="form-group position-relative">
          <label htmlFor="casts" className="form-label">
            Casts
          </label>
          <InputText
            inputClassName={errors?.casts && "invalid"}
            type="text"
            name="casts"
            placeholder="Casts"
            {...register("casts", {
              required: "Casts is required",
              minLength: {
                value: 3,
                message: "Casts must be at least 3 characters",
              },
            })}
            onKeyUp={() => {
              trigger("casts");
            }}
          />
          {errors?.casts && (
            <p className="error-helpers">{errors?.casts?.message}</p>
          )}
        </div>
        <div className="form-group position-relative">
          <label htmlFor="release__date" className="form-label">
            Release Date
          </label>
          <InputText
            inputClassName={errors?.release__date && "invalid"}
            type="text"
            name="release__date"
            placeholder="Release Date"
            {...register("release__date", {
              required: "Release Date is required",
              minLength: {
                value: 3,
                message: "Release Date must be at least 3 characters",
              },
            })}
            onKeyUp={() => {
              trigger("release__date");
            }}
          />
          {errors?.release__date && (
            <p className="error-helpers">{errors?.release__date?.message}</p>
          )}
        </div>
        <div className="form-group position-relative">
          <label htmlFor="category" className="form-label">
            Duration
          </label>
          <InputText
            inputClassName={errors?.duration && "invalid"}
            type="text"
            name="duration"
            placeholder="Duration"
            {...register("duration", {
              required: "Duration is required",
              minLength: {
                value: 3,
                message: "Duration must be at least 3 characters",
              },
            })}
            onKeyUp={() => {
              trigger("duration");
            }}
          />
          {errors?.duration && (
            <p className="error-helpers">{errors?.duration?.message}</p>
          )}
        </div>
      </div>
      <div className="d-flex flex-column" style={{ marginTop: 25 }}>
        <label htmlFor="synopsis" className="form-label">
          Synopsis
        </label>
        <textarea
          name="synopsis"
          rows="5"
          className="synopsis__textarea"
          placeholder="Write synopsis here"
        />
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
