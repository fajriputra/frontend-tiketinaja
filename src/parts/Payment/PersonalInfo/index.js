import React from "react";

import { ReactComponent as IconWarning } from "assets/images/icons/icon-warning.svg";

import InputText from "components/UI/Form/InputText";

import "./personal.scss";

const PersonalInfo = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="fullname" className="form-label">
          Full Name
        </label>
        <InputText
          type="text"
          name="fullname"
          placeholder="Your fullname"
          inputClassName="form-person"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <InputText
          type="email"
          name="email"
          placeholder="Your email address"
          inputClassName="form-person"
        />
      </div>
      <div className="form-group">
        <label for="phone" className="form-label">
          Phone Number
        </label>
        <InputText
          type="tel"
          name="phone"
          placeholder="Your phone number"
          inputClassName="form-person"
        />
      </div>

      <div
        className="alert alert-warning d-flex align-items-center"
        role="alert"
      >
        <IconWarning className="icon-warning" />

        <div>Fill your data correctly.</div>
      </div>
    </form>
  );
};

export default PersonalInfo;
