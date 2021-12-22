import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "helpers/axios";

import { showError, showSuccess } from "helpers/notification";
import Button from "components/UI/Button";

import "./activate-email.scss";

export default function ActivateEmail(props) {
  const { activation_token } = useParams();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const welcomeSuccess = () => (
    <h5 className="mb-4" style={{ lineHeight: "1.68em" }}>
      Welcome, You've join Ticketing App. <br />
      Let's click the button below to login
    </h5>
  );

  const expiredToken = () => {
    return (
      <h5 className="mb-4" style={{ lineHeight: "1.68em" }}>
        Oops, Your has been expired. <br />
        Let's click the button below to {error ? "Sign up" : "Sign in"}
      </h5>
    );
  };

  useEffect(() => {
    document.title = "Ticketing | Activation Email";
    if (activation_token) {
      axios
        .post("/auth/activation", { activation_token })
        .then((res) => {
          setSuccess(res.data.message);
        })
        .catch((err) => {
          err.response.data.message && setError(err.response.data.message);
        });
    }
  }, [activation_token]);

  return (
    <section className="activation">
      <div className="content">
        <div className="message mb-4">
          {success && showSuccess(success)}
          {error && showError(error)}
        </div>
        {success && welcomeSuccess()}
        {error && expiredToken()}
        <Button
          className="btn px-3 py-2"
          isPrimary
          type="link"
          href={error ? "/sign-up" : "/sign-in"}
        >
          {error ? "Sign up" : "Sign in"}
        </Button>
      </div>
    </section>
  );
}
