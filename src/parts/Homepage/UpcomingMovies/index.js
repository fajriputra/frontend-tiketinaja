import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "components/UI/Button";
import Card from "components/Card";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";

import "./upcoming.scss";
import { apiHost } from "config";
import { getMovie } from "store/admin/movie/action";

const initialState = {
  page: 1,
  limit: 6,
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

const UpcomingMovies = ({ data }) => {
  const dispatch = useDispatch();

  const [upcoming, setUpcoming] = useState(initialState);
  const [filtered, setFiltered] = useState(data);

  const { page, limit, keyword, sortBy, sortType } = upcoming;

  const handleCategory = (mth) => {
    setUpcoming({ ...upcoming, month: mth });

    dispatch(getMovie(page, limit, keyword, mth, sortBy, sortType)).then(
      (res) => {
        setFiltered(res.value.data.data);
      }
    );
  };

  return (
    <section className="upcoming__movies">
      <div className="container">
        <div className="upcoming__movies--text">
          <h4>Upcoming Movies</h4>
          <Button type="link" href="/all-movies" className="btn-view">
            view all
          </Button>
        </div>

        <div className="upcoming__movies--category">
          {monthNames?.map((item, index) => {
            return (
              <Button
                className={`btn btn-category ${
                  item === index + 1 ? "active" : ""
                }`}
                onClick={() => handleCategory(index + 1)}
                key={index}
              >
                {item}
              </Button>
            );
          })}
        </div>

        <div className="upcoming__movies--list">
          {filtered.length === 0 ? (
            <h6 className="mx-auto">Data not found</h6>
          ) : (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;
