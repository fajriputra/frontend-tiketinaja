import { DELETE_MOVIE, GET_MOVIE, POST_MOVIE, UPDATE_MOVIE } from "./constans";
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
