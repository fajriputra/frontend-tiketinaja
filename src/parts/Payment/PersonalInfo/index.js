import React, { useState, useEffect } from "react";

import { ReactComponent as IconWarning } from "assets/images/icons/icon-warning.svg";

import InputText from "components/UI/Form/InputText";
import axios from "helpers/axios";

import "./personal.scss";

const PersonalInfo = () => {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState("");

  useEffect(() => {
    const getUserLogin = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/user");

        const { data } = res.data;

        setIsLogin(data);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err.response.data.message);
      }
    };

    getUserLogin();
  }, []);

  if (loading) {
    return "loading";
  }

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
          value={`${isLogin[0]?.firstName} ${isLogin[0]?.lastName}`}
          isDisabled={isLogin}
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
          value={isLogin[0]?.email}
          isDisabled={isLogin}
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
          value={isLogin[0]?.phoneNumber}
          isDisabled={isLogin}
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
