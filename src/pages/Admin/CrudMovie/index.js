import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { BounceLoader } from "react-spinners";
import ReactPaginate from "react-paginate";
import { apiHost } from "config";

import Card from "components/Card";
import Header from "components/Header";
import CrudImage from "parts/Admin/CrudMovie/CrudImage";
import Sitelink from "components/Sitelink";
import CrudForm from "parts/Admin/CrudMovie/CrudForm";
import InputText from "components/UI/Form/InputText";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";
import Button from "components/UI/Button";

import {
  deleteMovie,
  getMovie,
  postMovie,
  updateMovie,
} from "store/admin/movie/action";

import "./crud-movie.scss";

const date = new Date().toISOString().split("T")[0];

const stateForm = {
  name: "",
  category: "",
  releaseDate: date,
  synopsis: "",
  cast: "",
  director: "",
  duration: "",
  image: null,
};

export default function Movie(props) {
  const [dataMovie, setDataMovie] = useState({
    page: 1,
    limit: 4,
    keyword: "",
    month: "",
    sortBy: "name",
    sortType: "asc",
  });
  const [form, setForm] = useState(stateForm);
  const [image, setImage] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const movie = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    document.title = "Ticketing | Movie";
    setLoading(true);
    dispatch(
      getMovie(
        dataMovie.page,
        dataMovie.limit,
        dataMovie.keyword,
        dataMovie.month,
        dataMovie.sortBy,
        dataMovie.sortType
      )
    )
      .then((res) => {
        setFiltered(res.value.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, dataMovie]);

  const handleText = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFile = (e) => {
    setForm({ ...form, image: e.target.files[0] });
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      releaseDate: "",
      synopsis: "",
      cast: "",
      director: "",
      duration: "",
      image: null,
    });
    setImage("");
    setIsUpdate(false);
  };

  const handleSubmit = () => {
    const formData = new FormData();

    for (const data in form) {
      formData.append(data, form[data]);
    }

    setSpinner(true);

    dispatch(postMovie(formData))
      .then((res) => {
        toast.success(res.value.data.message);
        setImage("");

        setDataMovie({ ...dataMovie, page: 1 });

        dispatch(
          getMovie(
            1,
            dataMovie.limit,
            dataMovie.keyword,
            dataMovie.month,
            dataMovie.sortBy,
            dataMovie.sortType
          )
        ).then((res) => {
          setFiltered(res.value.data.data);
        });
      })
      .catch((err) => {
        err.response.data.message && toast.error(err.response.data.message);
      })
      .finally(() => {
        setSpinner(false);
        resetForm();
      });
  };

  const handleDelete = (id) => {
    const test = window.confirm("Are you sure to delete this movie?");

    if (test) {
      dispatch(deleteMovie(id)).then((res) => {
        toast.success(res.value.data.message);

        setDataMovie({ ...dataMovie, page: 1 });

        dispatch(
          getMovie(
            1,
            dataMovie.limit,
            dataMovie.keyword,
            dataMovie.month,
            dataMovie.sortBy,
            dataMovie.sortType
          )
        ).then((res) => {
          setFiltered(res.value.data.data);
        });
      });
    }
  };

  const handleSort = (e) => {
    const sort = e.target.value.split(" ");
    setDataMovie({
      ...dataMovie,
      page: 1,
      sortBy: sort[0],
      sortType: sort[1],
      keyword: "",
    });

    dispatch(
      getMovie(
        1,
        dataMovie.limit,
        "",
        dataMovie.month,
        dataMovie.sortBy,
        dataMovie.sortType
      )
    ).then((res) => {
      setFiltered(res.value.data.data);

      history.push(`/movie?sortBy=${sort[0]}&sortType=${sort[1]}`);
    });
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setDataMovie({
        ...dataMovie,
        keyword: e.target.value,
      });

      dispatch(
        getMovie(
          1,
          dataMovie.limit,
          dataMovie.keyword,
          dataMovie.month,
          dataMovie.sortBy,
          dataMovie.sortType
        )
      ).then((res) => {
        setFiltered(res.value.data.data);
        history.push(`/movie?keyword=${e.target.value}`);
      });
    }
  };

  const handlePagination = (e) => {
    const selected = e.selected + 1;

    setDataMovie({
      ...dataMovie,
      page: selected,
    });

    dispatch(
      getMovie(
        selected,
        dataMovie.limit,
        dataMovie.keyword,
        dataMovie.month,
        dataMovie.sortBy,
        dataMovie.sortType
      )
    ).then((res) => {
      setFiltered(res.value.data.data);

      history.push(`?page=${selected}&limit=${dataMovie.limit}`);
    });
  };

  const setUpdate = (data) => {
    setMovieId(data.id);
    setForm({
      ...form,
      name: data.name,
      category: data.category,
      releaseDate: data.releaseDate.slice(0, 10),
      synopsis: data.synopsis,
      cast: data.cast,
      director: data.director,
      duration: data.duration,
      image: data.image,
    });
    setIsUpdate(true);
  };

  const handleUpdate = () => {
    const formData = new FormData();

    for (const data in form) {
      formData.append(data, form[data]);
    }

    dispatch(updateMovie(movieId, formData))
      .then((res) => {
        toast.success(res.value.data.message);
        setImage("");

        setDataMovie({ ...dataMovie, page: 1 });

        dispatch(
          getMovie(
            1,
            dataMovie.limit,
            dataMovie.keyword,
            dataMovie.month,
            dataMovie.sortBy,
            dataMovie.sortType
          )
        ).then((res) => {
          setFiltered(res.value.data.data);
        });
      })
      .catch((err) => {
        err.response.data.message && toast.error(err.response.data.message);
      });
    resetForm();
  };

  return (
    <>
      <Header {...props} className="mb-0" />
      <section className="movie">
        <div className="container">
          <h5 className="content__heading">Form Movie</h5>
          <Card className="crud__card--movie">
            <div className="d-flex flex-column flex-lg-row">
              <CrudImage
                movieImage={
                  image
                    ? image
                    : form.image
                    ? `${apiHost}/uploads/movie/${form.image}`
                    : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                }
              />

              <div className="w-100">
                <CrudForm
                  handleText={handleText}
                  handleFile={handleFile}
                  handleSubmit={isUpdate ? handleUpdate : handleSubmit}
                  handleReset={resetForm}
                  submitUpdate={isUpdate ? "Update" : "Submit"}
                  updateName={form.name}
                  updateCategory={form.category}
                  updateDirector={form.director}
                  updateCast={form.cast}
                  updateReleaseDate={form.releaseDate}
                  updateDuration={form.duration}
                  updateSynopsis={form.synopsis}
                  isLoading={spinner}
                />
              </div>
            </div>
          </Card>
          <div className="data__movie--head">
            <h5 className="content__heading">Data Movie</h5>

            <select
              name="sorting"
              className="form__input select ms-auto"
              onChange={handleSort}
            >
              <option value="">Sort by</option>
              <option value="name asc">A-Z</option>
              <option value="name desc">Z-A</option>
            </select>

            <InputText
              inputClassName="form__input search"
              placeholder="Search movie name..."
              name="keyword"
              onKeyPress={handleSearch}
              defaultValue={dataMovie.keyword}
            />
          </div>
          <Card
            className={`${
              loading ? "bg-white" : "card__data--movie position-relative"
            }`}
          >
            {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                <BounceLoader color="#5f2eea" />
              </div>
            ) : filtered.length > 0 ? (
              filtered.map((item) => (
                <Card className="card__image--wrapper" key={item.id}>
                  <Image
                    className="data__movie--image"
                    srcImage={
                      item.image
                        ? `${apiHost}/uploads/movie/${item.image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    altImage="Movie image"
                    imgClass="img-cover"
                  />

                  <MetaWrapper
                    title={item.name}
                    category={item.category.join(", ")}
                    classCategory="mb-3"
                  >
                    <Button
                      className="btn btn__admin update w-100 me-0 mb-2"
                      onClick={() => setUpdate(item)}
                    >
                      Update
                    </Button>
                    <Button
                      className="btn btn__admin delete w-100 me-0"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </MetaWrapper>
                </Card>
              ))
            ) : (
              <h5
                style={{
                  margin: "auto",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "fit-content",
                  textAlign: "center",
                }}
              >
                Movie are you looking for was not found
              </h5>
            )}
          </Card>

          <div className="d-flex justify-content-center align-items-center">
            <ReactPaginate
              previousLabel={false}
              nextLabel={false}
              breakLabel={"..."}
              forcePage={dataMovie.page - 1}
              pageCount={movie.pageInfo.totalPage}
              onPageChange={handlePagination}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              disabledClassName={"disabled"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </section>
      <Sitelink />
    </>
  );
}
