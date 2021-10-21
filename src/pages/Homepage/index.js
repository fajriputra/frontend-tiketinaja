import React from "react";
import Header from "components/Header";
import Hero from "parts/Homepage/Hero";
import NowMovies from "parts/Homepage/NowMovies";
import UpcomingMovies from "parts/Homepage/UpcomingMovies";
import Join from "parts/Homepage/Join";
import Sitelink from "components/Sitelink";

import useScrollTop from "hooks/useScrollTop";

export default function Homepage(props) {
  useScrollTop();

  return (
    <>
      <Header {...props} />
      <Hero />
      <NowMovies />
      <UpcomingMovies />
      <Join />
      <Sitelink />
    </>
  );
}
