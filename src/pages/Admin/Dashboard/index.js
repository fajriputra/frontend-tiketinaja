import React from "react";
import { Line } from "react-chartjs-2";

import Card from "components/Card";
import Header from "components/Header";
import Sitelink from "components/Sitelink";

import InputSelect from "components/UI/Form/InputSelect";
import Button from "components/UI/Button";

import "./dashboard.scss";

export default function Dashboard(props) {
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
                <InputSelect className="form__input" />
                <InputSelect className="form__input" />
                <InputSelect className="form__input" />
                <Button className="btn btn__action filter">Filter</Button>
                <Button className="btn btn__action reset">Reset</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Sitelink />
    </>
  );
}
