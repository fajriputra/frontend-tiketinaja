import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "components/UI/Button";
import Card from "components/Card";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";

import "./upcoming.scss";
import { apiHost } from "config";
import { getMovieFilter } from "store/admin/movie/action";
import { BounceLoader } from "react-spinners";

const initialState = {
  page: 1,
  limit: 5000,
  keyword: "",
  month: "",
  sortBy: "name",
  sortType: "asc",
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const UpcomingMovies = () => {
  const dispatch = useDispatch();

  const [upcoming, setUpcoming] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const { page, limit, keyword, month, sortBy, sortType } = upcoming;

  const handleCategory = (mth) => {
    setUpcoming({ ...upcoming, month: mth });
    setLoading(true);
    dispatch(getMovieFilter(page, limit, keyword, mth, sortBy, sortType))
      .then((res) => {
        setFiltered(res.value.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="upcoming__movies">
      <div className="container">
        <div className="upcoming__movies--text">
          <h4>Upcoming Movies</h4>
          <Button type="link" href="/" className="btn-view">
            view all
          </Button>
        </div>

        <div className="upcoming__movies--category">
          {monthNames?.map((item, index) => {
            return (
              <Button
                className={`btn btn-category ${
                  month === index ? "active" : ""
                }`}
                onClick={() => handleCategory(index)}
                key={index}
              >
                {item}
              </Button>
            );
          })}
        </div>

        <div
          className={`upcoming__movies--list ${
            loading ? "justify-content-center" : ""
          }`}
        >
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <BounceLoader color="#5f2eea" />
            </div>
          ) : filtered.length > 0 ? (
            filtered?.map((item) => {
              return (
                <Card key={item.id} className="width-223">
                  <Image
                    srcImage={
                      item.image
                        ? `${apiHost}/uploads/movie/${item.image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    altImage={item.name}
                    className="upcoming__movies--image"
                    imgClass="img-cover"
                  />
                  <MetaWrapper
                    title={item.name}
                    category={item.category.join(", ")}
                  >
                    <Button
                      type="link"
                      href={`/detail-movie/${item?.id}`}
                      className="btn btn-details w-100 me-0"
                    >
                      Details
                    </Button>
                  </MetaWrapper>
                </Card>
              );
            })
          ) : (
            <h6 className="mx-auto">
              {monthNames[month]
                ? `Data by month ${monthNames[month]} is not found`
                : "Select a month to see the upcoming movies"}
            </h6>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;
