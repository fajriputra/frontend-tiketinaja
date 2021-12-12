import { GET_MOVIE, GET_MOVIEBYID, POST_MOVIE, UPDATE_MOVIE } from "./constans";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  data: [],
  dataById: {},
  pageInfo: {},
};

const crudMovie = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MOVIE}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${GET_MOVIE}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
      };
    }
    case `${GET_MOVIE}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
        data: [],
        pageInfo: {},
      };
    }
    case `${GET_MOVIEBYID}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${GET_MOVIEBYID}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
        dataById: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
      };
    }
    case `${GET_MOVIEBYID}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
        dataById: {},
        pageInfo: {},
      };
    }
    // post movie
    case `${POST_MOVIE}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${POST_MOVIE}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case `${POST_MOVIE}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    // update movie
    case `${UPDATE_MOVIE}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${UPDATE_MOVIE}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case `${UPDATE_MOVIE}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }

    default:
      return state;
  }
};

export default crudMovie;
