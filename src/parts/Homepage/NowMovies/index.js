import React from "react";

// images
import Movies1 from "assets/images/movie6.jpg";

import Button from "components/UI/Button";
import Card from "components/Card";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";

import "./movies.scss";

const NowMovies = (props) => {
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
          <Card className="card-hover">
            <Image
              className="now__movies--image"
              srcImage={Movies1}
              altImage="Movies1"
              imgClass="img-cover"
            />
            <MetaWrapper
              title="Black Widow"
              category="Action, Premier, Family"
              className="hover-state"
            >
              <Button
                className="btn btn-details w-100 me-0 mb-3"
                type="link"
                href="/detail-movie"
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
          <Card className="card-hover">
            <Image
              className="now__movies--image"
              srcImage={Movies1}
              altImage="Movies1"
              imgClass="img-cover"
            />
            <MetaWrapper
              title="Black Widow"
              category="Action, Premier, Family"
              className="hover-state"
            >
              <Button
                className="btn btn-details w-100 me-0 mb-3"
                type="link"
                href="/detail-movie"
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
          <Card className="card-hover">
            <Image
              className="now__movies--image"
              srcImage={Movies1}
              altImage="Movies1"
              imgClass="img-cover"
            />
            <MetaWrapper
              title="Black Widow"
              category="Action, Premier, Family"
              className="hover-state"
            >
              <Button
                className="btn btn-details w-100 me-0 mb-3"
                type="link"
                href="/detail-movie"
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
          <Card className="card-hover">
            <Image
              className="now__movies--image"
              srcImage={Movies1}
              altImage="Movies1"
              imgClass="img-cover"
            />
            <MetaWrapper
              title="Black Widow"
              category="Action, Premier, Family"
              className="hover-state"
            >
              <Button
                className="btn btn-details w-100 me-0 mb-3"
                type="link"
                href="/detail-movie"
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
          <Card className="card-hover">
            <Image
              className="now__movies--image"
              srcImage={Movies1}
              altImage="Movies1"
              imgClass="img-cover"
            />
            <MetaWrapper
              title="Black Widow"
              category="Action, Premier, Family"
              className="hover-state"
            >
              <Button
                className="btn btn-details w-100 me-0 mb-3"
                type="link"
                href="/detail-movie"
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
          <Card className="card-hover">
            <Image
              className="now__movies--image"
              srcImage={Movies1}
              altImage="Movies1"
              imgClass="img-cover"
            />
            <MetaWrapper
              title="Black Widow"
              category="Action, Premier, Family"
              className="hover-state"
            >
              <Button
                className="btn btn-details w-100 me-0 mb-3"
                type="link"
                href="/detail-movie"
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
          <Card className="card-hover">
            <Image
              className="now__movies--image"
              srcImage={Movies1}
              altImage="Movies1"
              imgClass="img-cover"
            />
            <MetaWrapper
              title="Black Widow"
              category="Action, Premier, Family"
              className="hover-state"
            >
              <Button
                className="btn btn-details w-100 me-0 mb-3"
                type="link"
                href="/detail-movie"
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
        </div>
      </div>
    </section>
  );
};

export default NowMovies;
