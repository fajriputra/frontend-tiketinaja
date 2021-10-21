import React from "react";

import Button from "components/UI/Button";
import InputText from "components/UI/Form/InputText";

import "./join.scss";

const Join = () => {
  return (
    <section className="join">
      <div className="container">
        <div className="join__content text-center">
          <p className="join__content--title">
            Be the vanguard of the <br />
            <span>Moviegoers</span>
          </p>

          <form className="join__content--form">
            <InputText
              name="email"
              type="email"
              placeholder="Type your email"
            />

            <Button className="btn btn-join" isPrimary>
              Join now
            </Button>
          </form>

          <p className="join__content--text">
            By joining you as a Tickitz member,
            <br />
            we will always send you the latest updates via email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Join;
