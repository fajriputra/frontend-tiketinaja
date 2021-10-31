import React, { useState } from "react";

import { useForm } from "react-hook-form";
import InputText from "components/UI/Form/InputText";

import "./crud-form.scss";
import Button from "components/UI/Button";
import { useDispatch } from "react-redux";
import { postMovie } from "store/admin/movie/action";

export default function CrudForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    // reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(postMovie(data)).then((res) => console.log(res));
  };

  const setUpdate = () => {
    console.log("Handle set update is running");
  };

  const handleUpdate = () => {
    console.log("Handle Update is running");
  };

  const handleDelete = () => {
    console.log("Handle Delete is running");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="crud__form">
          <div className="form-group position-relative">
            <label htmlFor="movie" className="form-label">
              Movie Name
            </label>
            <InputText
              inputClassName={errors?.name && "invalid"}
              type="text"
              name="name"
              placeholder="Movie name"
              {...register("name", {
                required: "Movie Name is required",
                minLength: {
                  value: 3,
                  message: "Movie Name must be at least 3 characters",
                },
              })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            {errors?.name && (
              <p className="error-helpers">{errors?.name?.message}</p>
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
            <label htmlFor="cast" className="form-label">
              Casts
            </label>
            <InputText
              inputClassName={errors?.cast && "invalid"}
              type="text"
              name="cast"
              placeholder="Casts"
              {...register("cast", {
                required: "Casts is required",
                minLength: {
                  value: 3,
                  message: "Casts must be at least 3 characters",
                },
              })}
              onKeyUp={() => {
                trigger("cast");
              }}
            />
            {errors?.cast && (
              <p className="error-helpers">{errors?.cast?.message}</p>
            )}
          </div>
          <div className="form-group position-relative">
            <label htmlFor="releaseDate" className="form-label">
              Release Date
            </label>
            <InputText
              inputClassName={errors?.releaseDate && "invalid"}
              type="date"
              name="releaseDate"
              placeholder="Release Date"
              {...register("releaseDate", {
                required: "Release Date is required",
                minLength: {
                  value: 3,
                  message: "Release Date must be at least 3 characters",
                },
              })}
              onKeyUp={() => {
                trigger("releaseDate");
              }}
            />
            {errors?.releaseDate && (
              <p className="error-helpers">{errors?.releaseDate?.message}</p>
            )}
          </div>
          <div className="form-group position-relative">
            <label htmlFor="duration" className="form-label">
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
          <div className="form-group position-relative">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <InputText
              inputClassName={errors?.image && "invalid"}
              type="file"
              name="image"
              placeholder="Choose a file"
              {...register("image", {
                required: "Image is required",
              })}
              onKeyUp={() => {
                trigger("image");
              }}
            />
            {errors?.image && (
              <p className="error-helpers">{errors?.image?.message}</p>
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
            {...register("synopsis", {})}
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
      </form>
    </>
  );
}
