import React from "react";

import Movie1 from "assets/images/movie6.jpg";

import Button from "components/UI/Button";
import Card from "components/Card";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";

import "./upcoming.scss";

const UpcomingMovies = () => {
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
          <Button className="btn btn-category active">January</Button>
          <Button className="btn btn-category">February</Button>
          <Button className="btn btn-category">March</Button>
          <Button className="btn btn-category">April</Button>
          <Button className="btn btn-category">May</Button>
          <Button className="btn btn-category">June</Button>
          <Button className="btn btn-category">July</Button>
          <Button className="btn btn-category">August</Button>
          <Button className="btn btn-category">September</Button>
          <Button className="btn btn-category">October</Button>
          <Button className="btn btn-category">November</Button>
          <Button className="btn btn-category">December</Button>
        </div>

        <div className="upcoming__movies--list">
          <Card>
            <Image
              srcImage={Movie1}
              altImage="Movie1"
              className="upcoming__movies--image"
              imgClass="img-cover"
            />
            <MetaWrapper title="Black Widow" category="Action, Premier, Family">
              <Button
                type="link"
                href="/detail-movie"
                className="btn btn-details w-100 me-0"
              >
                Details
              </Button>
            </MetaWrapper>
          </Card>
          <Card>
            <Image
              srcImage={Movie1}
              altImage="Movie1"
              className="upcoming__movies--image"
              imgClass="img-cover"
            />
            <MetaWrapper title="Black Widow" category="Action, Premier, Family">
              <Button
                type="link"
                href="/detail-movie"
                className="btn btn-details w-100 me-0"
              >
                Details
              </Button>
            </MetaWrapper>
          </Card>
          <Card>
            <Image
              srcImage={Movie1}
              altImage="Movie1"
              className="upcoming__movies--image"
              imgClass="img-cover"
            />
            <MetaWrapper title="Black Widow" category="Action, Premier, Family">
              <Button
                type="link"
                href="/detail-movie"
                className="btn btn-details w-100 me-0"
              >
                Details
              </Button>
            </MetaWrapper>
          </Card>
          <Card>
            <Image
              srcImage={Movie1}
              altImage="Movie1"
              className="upcoming__movies--image"
              imgClass="img-cover"
            />
            <MetaWrapper title="Black Widow" category="Action, Premier, Family">
              <Button
                type="link"
                href="/detail-movie"
                className="btn btn-details w-100 me-0"
              >
                Details
              </Button>
            </MetaWrapper>
          </Card>
          <Card>
            <Image
              srcImage={Movie1}
              altImage="Movie1"
              className="upcoming__movies--image"
              imgClass="img-cover"
            />
            <MetaWrapper title="Black Widow" category="Action, Premier, Family">
              <Button
                type="link"
                href="/detail-movie"
                className="btn btn-details w-100 me-0"
              >
                Details
              </Button>
            </MetaWrapper>
          </Card>
          <Card>
            <Image
              srcImage={Movie1}
              altImage="Movie1"
              className="upcoming__movies--image"
              imgClass="img-cover"
            />
            <MetaWrapper title="Black Widow" category="Action, Premier, Family">
              <Button
                type="link"
                href="/detail-movie"
                className="btn btn-details w-100 me-0"
              >
                Details
              </Button>
            </MetaWrapper>
          </Card>
          <Card>
            <Image
              srcImage={Movie1}
              altImage="Movie1"
              className="upcoming__movies--image"
              imgClass="img-cover"
            />
            <MetaWrapper title="Black Widow" category="Action, Premier, Family">
              <Button
                type="link"
                href="/detail-movie"
                className="btn btn-details w-100 me-0"
              >
                Details
              </Button>
            </MetaWrapper>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;
