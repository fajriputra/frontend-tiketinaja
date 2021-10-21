import React from "react";
import Header from "components/Header";

import Sitelink from "components/Sitelink";
import ImageDetail from "parts/Detailspage/ImageDetail";
import DetailTitle from "parts/Detailspage/DetailTitle";
import DetailInfo from "parts/Detailspage/DetailInfo";
import Synopsis from "parts/Detailspage/Synopsis";
import Showtimes from "parts/Detailspage/Showtimes";

import useScrollTop from "hooks/useScrollTop";

export default function DetailPage(props) {
  useScrollTop();

  return (
    <>
      <Header {...props} />
      <section className="container">
        <div className="d-flex flex-column flex-md-row">
          <ImageDetail />

          <div className="content__movie w-100">
            <DetailTitle />
            <DetailInfo />
            <hr className="line w-100 mt-4 mt-md-3" />
            <Synopsis />
          </div>
        </div>
      </section>
      <Showtimes />
      <Sitelink />
    </>
  );
}
