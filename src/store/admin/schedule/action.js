import {
  DELETE_SCHEDULE,
  GET_SCHEDULE,
  POST_SCHEDULE,
  UPDATE_SCHEDULE,
} from "./constans";
import axios from "helpers/axios";

export const postSchedule = (data) => {
  return {
    type: POST_SCHEDULE,
    payload: axios.post("/schedule", data),
  };
};

export const getSchedule = (
  page,
  limit,
  location,
  movieId,
  sortBy,
  sortType
) => {
  return {
    type: GET_SCHEDULE,
    payload: axios.get(
      `/schedule?page=${page}&limit=${limit}&location=${location}&movieId=${movieId}&sortBy=${sortBy}&sortType=${sortType}`
    ),
  };
};

export const updateSchedule = (id, data) => {
  return {
    type: UPDATE_SCHEDULE,
    payload: axios.patch(`/schedule/${id}`, data),
  };
};

export const deleteSchedule = (id) => {
  return {
    type: DELETE_SCHEDULE,
    payload: axios.delete(`/schedule/${id}`),
  };
};
