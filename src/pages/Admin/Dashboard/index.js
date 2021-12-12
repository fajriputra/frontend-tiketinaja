import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import { toast } from "react-toastify";
import axios from "helpers/axios";

import Card from "components/Card";
import Header from "components/Header";
import Sitelink from "components/Sitelink";

import InputSelect from "components/UI/Form/InputSelect";
import Button from "components/UI/Button";
import { getMovie } from "store/admin/movie/action";

import "./dashboard.scss";

const dataPremier = [
  {
    id: 1,
    premier: "CineOne21",
  },
  {
    id: 2,
    premier: "ebv.id",
  },
  {
    id: 3,
    premier: "hiflix Cinema",
  },
];

const queryMovie = {
  page: 1,
  limit: 5000,
  keyword: "",
  month: "",
  sortBy: "name",
  sortType: "asc",
};

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const location = useSelector((state) => state.location);

  const [filter, setFilter] = useState({
    movieId: "",
    premier: "",
    location: "",
  });

  const [dataDashboard, setDataDashboard] = useState([]);

  useEffect(() => {
    dispatch(
      getMovie(
        queryMovie.page,
        queryMovie.limit,
        queryMovie.keyword,
        queryMovie.month,
        queryMovie.sortBy,
        queryMovie.sortType
      )
    );
  }, [dispatch, filter.movieId, filter.premier, filter.location]);

  const resetForm = () => {
    setFilter({ movieId: "", premier: "", location: "" });
    setDataDashboard([]);
  };

  const filterMovie = (e) => {
    const filtered = e.target.value;
    setFilter({ ...filter, movieId: filtered });
  };

  const filterPremier = (e) => {
    const filtered = e.target.value;
    setFilter({ ...filter, premier: filtered });
  };

  const filterLocation = (e) => {
    const filtered = e.target.value;
    setFilter({ ...filter, location: filtered });
  };

  // console.log(filter);

  const getDashboard = () => {
    axios
      .get(
        `/dashboard?movieId=${filter.movieId}&premier=${filter.premier}&location=${filter.location}`
      )
      .then((res) => setDataDashboard(res.data.data))
      .catch((err) => {
        err.response.data.message && toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <Header {...props} className="mb-0" />
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h5 className="content__heading">Dashboard</h5>
              <Card className="dashboard__card">
                <Line
                  data={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Des",
                    ],
                    datasets: [
                      {
                        data: [
                          50, 300, 26, 55, 120, 33, 22, 11, 150, 500, 230, 74,
                        ],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  height={400}
                  width={790}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        type: "linear",
                        display: true,
                        title: {
                          display: true,
                          text: "Income",
                          color: "#999999",
                          font: {
                            family: "Mulish",
                          },
                          padding: {
                            bottom: 10,
                          },
                        },
                        ticks: {
                          color: "#999999",
                          font: {
                            family: "Mulish",
                          },
                        },

                        beginAtZero: true,
                      },
                      x: {
                        title: {
                          display: true,
                          text: "Month",
                          color: "#999999",
                          font: {
                            family: "Mulish",
                          },
                          padding: {
                            top: 10,
                          },
                        },
                        ticks: {
                          color: "#999999",
                          font: {
                            family: "Mulish",
                          },
                        },
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </Card>
            </div>
            <div className="col-md-3">
              <h5 className="content__heading">Filtered</h5>
              <Card className="dashboard__card filtered">
                <InputSelect
                  selectDefault="Select Movie"
                  className="form__input"
                  options={movie.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                  onChange={filterMovie}
                  name="movieId"
                  value={filter.movieId}
                />
                <InputSelect
                  selectDefault="Select Premiere"
                  className="form__input"
                  options={dataPremier.map((item) => ({
                    label: item.premier,
                    value: item.premier,
                  }))}
                  onChange={filterPremier}
                  name="premier"
                  value={filter.premier}
                />
                <InputSelect
                  selectDefault="Select Location"
                  className="form__input"
                  options={location.data.map((item) => ({
                    label: item.nama,
                    value: item.nama,
                  }))}
                  onChange={filterLocation}
                  name="location"
                  value={filter.location}
                />
                <Button
                  className="btn btn__action filter"
                  onClick={getDashboard}
                >
                  Filter
                </Button>
                <Button className="btn btn__action reset" onClick={resetForm}>
                  Reset
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Sitelink />
    </>
  );
}
