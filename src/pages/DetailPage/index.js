import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { useParams } from "react-router-dom";

import Header from "components/Header";
import Sitelink from "components/Sitelink";
import ImageDetail from "parts/Detailspage/ImageDetail";
import DetailTitle from "parts/Detailspage/DetailTitle";
import DetailInfo from "parts/Detailspage/DetailInfo";
import Synopsis from "parts/Detailspage/Synopsis";
import Showtimes from "parts/Detailspage/Showtimes";

import axios from "helpers/axios";

import useScrollTop from "hooks/useScrollTop";

export default function DetailPage(props) {
  useScrollTop();

  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [detail, setDetails] = useState([]);

  useEffect(() => {
    document.title = "Ticketing | Detail";
    window.scrollTo(0, 0);

    const getDetailMovie = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/movies/${movieId}`);

        const { data } = res.data;

        setDetails(data);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        alert(err.response.data.message);
      }
    };

    getDetailMovie();
  }, [movieId]);

  if (loading) {
    return (
      <div style={{ margin: "20% 50%" }}>
        <BounceLoader color="#5f2eea" />
      </div>
    );
  }

  return (
    <>
      <Header {...props} />
      <section className="container">
        <div className="d-flex flex-column flex-md-row">
          <ImageDetail data={detail} />

          <div className="content__movie w-100">
            <DetailTitle data={detail} />
            <DetailInfo data={detail} />
            <hr className="line w-100 mt-4 mt-md-3" />
            <Synopsis data={detail} />
          </div>
        </div>
      </section>
      <Showtimes movieId={detail} />
      <Sitelink />
    </>
  );
}
