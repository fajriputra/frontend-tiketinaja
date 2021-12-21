import React, { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

import Header from "components/Header";
import Sitelink from "components/Sitelink";
import OrderHistory from "parts/Profilepage/OrderHistory";
import ProfileInfo from "parts/Profilepage/ProfileInfo";
import ProfileDetail from "parts/Profilepage/ProfileDetail";
import TabProfile from "parts/Profilepage/TabProfile";

import "./profile.scss";

export default function ProfilePage(props) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Ticketing | Profile";
    window.scrollTo(0, 0);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loading__spinners">
        <BounceLoader color="#5f2eea" />
      </div>
    );
  }
  return (
    <>
      <Header {...props} className="mb-0" />
      <TabProfile
        className="tab__profile--mobile"
        account={() => setShow(false)}
        history={() => setShow(true)}
        active={show}
      />
      <section className="profile">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <ProfileInfo />
            </div>
            <div className="col-sm-12 col-md-8">
              <TabProfile
                account={() => setShow(false)}
                history={() => setShow(true)}
                active={show}
              />

              {show ? <OrderHistory /> : <ProfileDetail />}
            </div>
          </div>
        </div>
      </section>
      <Sitelink />
    </>
  );
}
