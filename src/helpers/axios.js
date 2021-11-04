import axios from "axios";

import { apiHost } from "../config";

const instances = axios.create({
  baseURL: `${apiHost}`,
});

// Add a request interceptor
instances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // =================
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    // =================
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403) {
      if (error.response.data.message === "jwt expired") {
        const refreshToken = localStorage.getItem("refreshToken");
        instances
          .post("/auth/refresh-token", { refreshToken })
          .then((res) => {
            alert("Refresh token is success");
            localStorage.setItem("token", res.value.data.data.token);
            window.location.reload();
          })
          .catch((err) => {
            localStorage.clear();
            window.location.href = "/sign-in";
          });
      }
    }
    return Promise.reject(error);
  }
);

export default instances;
