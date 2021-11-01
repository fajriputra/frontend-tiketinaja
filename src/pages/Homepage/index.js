import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Hero from "parts/Homepage/Hero";
import NowMovies from "parts/Homepage/NowMovies";
import UpcomingMovies from "parts/Homepage/UpcomingMovies";
import Join from "parts/Homepage/Join";
import Sitelink from "components/Sitelink";

import axios from "helpers/axios";

import useScrollTop from "hooks/useScrollTop";
import { BounceLoader } from "react-spinners";
import { useSelector } from "react-redux";

export default function Homepage(props) {
  useScrollTop();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = "Ticketing | Home";
    window.scrollTo(0, 0);

    const getMovies = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/movies?page=${page}&limit=${limit}`);

        const { data } = res.data;

        setMovies(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        new Error(err.response.data.message);
      }
    };
    getMovies();
  }, [page, limit]);

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
      <NowMovies data={movies} />
      <UpcomingMovies />
      <Join />
      <Sitelink />
    </>
  );
}
