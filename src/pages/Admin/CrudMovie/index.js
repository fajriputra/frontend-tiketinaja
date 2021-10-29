import React from "react";
import Card from "components/Card";
import Header from "components/Header";
import CrudImage from "parts/Admin/CrudMovie/CrudImage";

import Sitelink from "components/Sitelink";
import CrudForm from "parts/Admin/CrudMovie/CrudForm";
import InputSelect from "components/UI/Form/InputSelect";
import InputText from "components/UI/Form/InputText";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";
import Button from "components/UI/Button";

import MovieImage from "assets/images/movie6.jpg";

import "./crud-movie.scss";
// import Pagination from "components/Pagination";

export default function Movie(props) {
  return (
    <>
      <Header {...props} className="mb-0" />
      <section className="movie">
        <div className="container">
          <h5 className="content__heading">Form Movie</h5>
          <Card className="crud__card--movie">
            <div className="d-flex">
              <CrudImage />

              <div className="w-100">
                <CrudForm />
              </div>
            </div>
          </Card>

          <div className="data__movie--head">
            <h5 className="content__heading">Data Movie</h5>
            <InputSelect className="form__input select ms-auto" />
            <InputText
              inputClassName="form__input search"
              placeholder="Search movie name..."
            />
          </div>

          <Card className="card__data--movie">
            <Card className="card__image--wrapper">
              <Image
                className="data__movie--image"
                srcImage={MovieImage}
                altImage="Movie image"
                imgClass="img-cover"
              />

              <MetaWrapper
                title="Black Widow"
                category="Action, Adventure, Sci-Fi"
                classCategory="mb-3"
              >
                <Button className="btn btn__admin update w-100 me-0 mb-2">
                  Update
                </Button>
                <Button className="btn btn__admin delete w-100 me-0">
                  Delete
                </Button>
              </MetaWrapper>
            </Card>
            <Card className="card__image--wrapper">
              <Image
                className="data__movie--image"
                srcImage={MovieImage}
                altImage="Movie image"
                imgClass="img-cover"
              />

              <MetaWrapper
                title="Black Widow"
                category="Action, Adventure, Sci-Fi"
                classCategory="mb-3"
              >
                <Button className="btn btn__admin update w-100 me-0 mb-2">
                  Update
                </Button>
                <Button className="btn btn__admin delete w-100 me-0">
                  Delete
                </Button>
              </MetaWrapper>
            </Card>
            <Card className="card__image--wrapper">
              <Image
                className="data__movie--image"
                srcImage={MovieImage}
                altImage="Movie image"
                imgClass="img-cover"
              />

              <MetaWrapper
                title="Black Widow"
                category="Action, Adventure, Sci-Fi"
                classCategory="mb-3"
              >
                <Button className="btn btn__admin update w-100 me-0 mb-2">
                  Update
                </Button>
                <Button className="btn btn__admin delete w-100 me-0">
                  Delete
                </Button>
              </MetaWrapper>
            </Card>
            <Card className="card__image--wrapper">
              <Image
                className="data__movie--image"
                srcImage={MovieImage}
                altImage="Movie image"
                imgClass="img-cover"
              />

              <MetaWrapper
                title="Black Widow"
                category="Action, Adventure, Sci-Fi"
                classCategory="mb-3"
              >
                <Button className="btn btn__admin update w-100 me-0 mb-2">
                  Update
                </Button>
                <Button className="btn btn__admin delete w-100 me-0">
                  Delete
                </Button>
              </MetaWrapper>
            </Card>
            <Card className="card__image--wrapper">
              <Image
                className="data__movie--image"
                srcImage={MovieImage}
                altImage="Movie image"
                imgClass="img-cover"
              />

              <MetaWrapper
                title="Black Widow"
                category="Action, Adventure, Sci-Fi"
                classCategory="mb-3"
              >
                <Button className="btn btn__admin update w-100 me-0 mb-2">
                  Update
                </Button>
                <Button className="btn btn__admin delete w-100 me-0">
                  Delete
                </Button>
              </MetaWrapper>
            </Card>
            <Card className="card__image--wrapper">
              <Image
                className="data__movie--image"
                srcImage={MovieImage}
                altImage="Movie image"
                imgClass="img-cover"
              />

              <MetaWrapper
                title="Black Widow"
                category="Action, Adventure, Sci-Fi"
                classCategory="mb-3"
              >
                <Button className="btn btn__admin update w-100 me-0 mb-2">
                  Update
                </Button>
                <Button className="btn btn__admin delete w-100 me-0">
                  Delete
                </Button>
              </MetaWrapper>
            </Card>
            <Card className="card__image--wrapper">
              <Image
                className="data__movie--image"
                srcImage={MovieImage}
                altImage="Movie image"
                imgClass="img-cover"
              />

              <MetaWrapper
                title="Black Widow"
                category="Action, Adventure, Sci-Fi"
                classCategory="mb-3"
              >
                <Button className="btn btn__admin update w-100 me-0 mb-2">
                  Update
                </Button>
                <Button className="btn btn__admin delete w-100 me-0">
                  Delete
                </Button>
              </MetaWrapper>
            </Card>
          </Card>
        </div>
      </section>
      {/* <Pagination /> */}
      <Sitelink />
    </>
  );
}
