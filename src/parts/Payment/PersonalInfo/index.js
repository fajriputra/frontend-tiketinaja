import React from "react";

import { ReactComponent as IconWarning } from "assets/images/icons/icon-warning.svg";

import InputText from "components/UI/Form/InputText";

import "./personal.scss";

const PersonalInfo = ({ data, isDisabled }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="fullname" className="form-label">
          Full Name
        </label>
        <InputText
          readOnly
          type="text"
          name="fullname"
          value={`${data?.firstName} ${data?.lastName}`}
          isDisabled={isDisabled}
          placeholder="Your fullname"
          inputClassName="form-person"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <InputText
          readOnly
          type="email"
          name="email"
          value={data?.email}
          isDisabled={isDisabled}
          placeholder="Your email address"
          inputClassName="form-person"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <InputText
          readOnly
          type="tel"
          name="phone"
          value={data?.phoneNumber}
          isDisabled={isDisabled}
          placeholder="Your phone number"
          inputClassName="form-person"
        />
      </div>

      <div
        className="alert personal__info--alert alert-warning d-flex align-items-center"
        role="alert"
      >
        <IconWarning className="icon-warning" />

        <div>Fill your data correctly.</div>
      </div>
    </form>
  );
};

export default PersonalInfo;
