import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Header";
import Hero from "parts/Homepage/Hero";
import NowMovies from "parts/Homepage/NowMovies";
import UpcomingMovies from "parts/Homepage/UpcomingMovies";
import Join from "parts/Homepage/Join";
import Sitelink from "components/Sitelink";

import useScrollTop from "hooks/useScrollTop";
import { BounceLoader } from "react-spinners";
import { getMovie } from "store/admin/movie/action";

const queryMovie = {
  page: 1,
  limit: 100,
  keyword: "",
  month: "",
  sortBy: "name",
  sortType: "asc",
};

export default function Homepage(props) {
  useScrollTop();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    document.title = "Ticketing | Home";
    window.scrollTo(0, 0);
    setLoading(true);
    dispatch(
      getMovie(
        queryMovie.page,
        queryMovie.limit,
        queryMovie.keyword,
        queryMovie.month,
        queryMovie.sortBy,
        queryMovie.sortType
      )
    ).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading__spinners">
        <BounceLoader color="#5f2eea" />
      </div>
    );
  }

  return (
    <>
      <Header {...props} />
      <Hero />
      <NowMovies data={movie.data} />
      <UpcomingMovies />
      <Join />
      <Sitelink />
    </>
  );
}
