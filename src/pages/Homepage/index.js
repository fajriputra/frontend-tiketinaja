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

export default function Homepage(props) {
  useScrollTop();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/movies?page=${page}&limit=${limit}`);

        const { data } = res.data;

        setMovies(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    };
    getMovies();
  }, [page, limit]);

  if (loading) {
    return (
      <div style={{ margin: "20% 50%", height: "100vh" }}>
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
