import React from "react";

import InputText from "components/UI/Form/InputText";

import "./crud-form.scss";
import Button from "components/UI/Button";

export default function CrudForm(props) {
  return (
    <>
      <div className="crud__form">
        <div className="form-group position-relative">
          <label htmlFor="movie" className="form-label">
            Movie Name
          </label>
          <InputText
            type="text"
            name="name"
            placeholder="Movie name"
            onChange={props.handleText}
            value={props.updateName}
          />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <InputText
            type="text"
            name="category"
            placeholder="Category"
            onChange={props.handleText}
            value={props.updateCategory}
          />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="director" className="form-label">
            Director
          </label>
          <InputText
            type="text"
            name="director"
            placeholder="Director"
            onChange={props.handleText}
            value={props.updateDirector}
          />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="cast" className="form-label">
            Casts
          </label>
          <InputText
            type="text"
            name="cast"
            placeholder="Casts"
            onChange={props.handleText}
            value={props.updateCast}
          />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="releaseDate" className="form-label">
            Release Date
          </label>
          <InputText
            type="date"
            name="releaseDate"
            placeholder="Release Date"
            onChange={props.handleText}
            value={props.updateReleaseDate}
          />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="duration" className="form-label">
            Duration
          </label>
          <InputText
            type="text"
            name="duration"
            placeholder="Duration"
            onChange={props.handleText}
            value={props.updateDuration}
          />
        </div>
        <div className="form-group position-relative">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <InputText
            type="file"
            name="image"
            placeholder="Choose a file"
            onChange={props.handleFile}
          />
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
          onChange={props.handleText}
          value={props.updateSynopsis}
        />
      </div>

      <div className="d-flex justify-content-end">
        <Button
          className="btn btn__action--admin reset"
          isPrimary
          onClick={props.handleReset}
        >
          Reset
        </Button>
        <Button
          className="btn btn__action--admin submit"
          isPrimary
          onClick={props.handleSubmit}
          isLoading={props.isLoading}
        >
          {props.submitUpdate}
        </Button>
      </div>
    </>
  );
}
