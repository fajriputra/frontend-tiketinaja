import { GET_Schedule, POST_Schedule, UPDATE_Schedule } from "./constans";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  data: [],
  pageInfo: {},
};

const crudSchedule = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_Schedule}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${GET_Schedule}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
      };
    }
    case `${GET_Schedule}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
        data: [],
        pageInfo: {},
      };
    }
    // post Schedule
    case `${POST_Schedule}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${POST_Schedule}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case `${POST_Schedule}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    // update Schedule
    case `${UPDATE_Schedule}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${UPDATE_Schedule}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case `${UPDATE_Schedule}_REJECTED`: {
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

export default crudSchedule;
