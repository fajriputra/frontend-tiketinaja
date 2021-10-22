import React from "react";

import DefaultImage from "assets/images/bg-auth.png";

import { apiHost } from "config";
import Button from "components/UI/Button";
import Card from "components/Card";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";

import "./movies.scss";

const NowMovies = ({ data }) => {
  return (
    <section className="now__movies">
      <div className="container">
        <div className="now__movies--text">
          <h4>Now Showing</h4>
          <Button type="link" href="/all-movies" className="btn-view">
            view all
          </Button>
        </div>

        <div className="now__movies--list">
          {data?.map((item) => {
            return (
              <Card className="card-hover" key={item.id}>
                <Image
                  className="now__movies--image"
                  srcImage={
                    item?.image
                      ? `${apiHost}/uploads/movie/${item?.image}`
                      : `${DefaultImage}`
                  }
                  altImage={item.name}
                  imgClass="img-cover"
                />
                <MetaWrapper
                  title={item.name}
                  category={item.category.join(", ")}
                  className="hover-state"
                >
                  <Button
                    className="btn btn-details w-100 me-0 mb-3"
                    type="link"
                    href={`/detail-movie/${item?.id}`}
                  >
                    Details
                  </Button>
                  <Button
                    className="btn btn-book w-100 me-0"
                    type="link"
                    href="/order"
                    isPrimary
                  >
                    Book now
                  </Button>
                </MetaWrapper>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NowMovies;
