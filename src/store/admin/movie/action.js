import {
  DELETE_MOVIE,
  GET_MOVIE,
  GET_MOVIEBYID,
  GET_MOVIE_FILTER,
  POST_MOVIE,
  UPDATE_MOVIE,
} from "./constans";
import axios from "helpers/axios";

export const postMovie = (data) => {
  return {
    type: POST_MOVIE,
    payload: axios.post("/movies", data),
  };
};

export const getMovie = (page, limit, keyword, month, sortBy, sortType) => {
  return {
    type: GET_MOVIE,
    payload: axios.get(
      `/movies?page=${page}&limit=${limit}&month=${month}&keyword=${keyword}&sortBy=${sortBy}&sortType=${sortType}`
    ),
  };
};

export const getMovieFilter = (
  page,
  limit,
  keyword,
  month,
  sortBy,
  sortType
) => {
  return {
    type: GET_MOVIE_FILTER,
    payload: axios.get(
      `/movies?page=${page}&limit=${limit}&month=${month}&keyword=${keyword}&sortBy=${sortBy}&sortType=${sortType}`
    ),
  };
};

export const getMovieById = (id) => {
  return {
    type: GET_MOVIEBYID,
    payload: axios.get(`/movies/${id}`),
  };
};

export const updateMovie = (id, data) => {
  return {
    type: UPDATE_MOVIE,
    payload: axios.patch(`/movies/${id}`, data),
  };
};

export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: axios.delete(`/movies/${id}`),
  };
};
