import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Header";
import Hero from "parts/Homepage/Hero";
import NowMovies from "parts/Homepage/NowMovies";
import UpcomingMovies from "parts/Homepage/UpcomingMovies";
import Join from "parts/Homepage/Join";
import Sitelink from "components/Sitelink";

// import axios from "helpers/axios";

import useScrollTop from "hooks/useScrollTop";
import { BounceLoader } from "react-spinners";
import { getMovie } from "store/admin/movie/action";

const initialState = {
  page: 1,
  limit: 6,
  keyword: "",
  month: "",
  sortBy: "name",
  sortType: "asc",
};

export default function Homepage(props) {
  useScrollTop();
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(6);
  // const [movies, setMovies] = useState([]);
  const [dataMovie, setDataMovie] = useState(initialState);
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    document.title = "Ticketing | Home";
    window.scrollTo(0, 0);
    setLoading(true);
    dispatch(
      getMovie(
        dataMovie.page,
        dataMovie.limit,
        dataMovie.keyword,
        dataMovie.month,
        dataMovie.sortBy,
        dataMovie.sortType
      )
    ).finally(() => {
      setLoading(false);
    });
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
      <Header {...props} />
      <Hero />
      <NowMovies data={movie.data} />
      <UpcomingMovies data={movie.data} />
      <Join />
      <Sitelink />
    </>
  );
}
