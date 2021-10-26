import React, { useEffect } from "react";

import Header from "components/Header";
import Sitelink from "components/Sitelink";

import ProfileInfo from "parts/Profilepage/ProfileInfo";
import ProfileDetail from "parts/Profilepage/ProfileDetail";
import TabProfile from "parts/Profilepage/TabProfile";

import "./profile.scss";
import OrderHistory from "parts/Profilepage/OrderHistory";

export default function ProfilePage(props) {
  useEffect(() => {
    document.title = "Ticketing | Profile";
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header {...props} className="mb-0" />
      <TabProfile className="tab__profile--mobile" />
      <section className="profile">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <ProfileInfo />
            </div>
            <div className="col-sm-12 col-md-8">
              <TabProfile />
              {/* <ProfileDetail /> */}
              <OrderHistory />
            </div>
          </div>
        </div>
      </section>
      <Sitelink />
    </>
  );
}
