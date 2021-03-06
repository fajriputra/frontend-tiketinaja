import { GET_SCHEDULE, POST_SCHEDULE, UPDATE_SCHEDULE } from "./constans";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  data: [],
  pageInfo: {},
};

const crudSchedule = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SCHEDULE}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${GET_SCHEDULE}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
      };
    }
    case `${GET_SCHEDULE}_REJECTED`: {
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
    case `${POST_SCHEDULE}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${POST_SCHEDULE}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case `${POST_SCHEDULE}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    // update Schedule
    case `${UPDATE_SCHEDULE}_PENDING`: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case `${UPDATE_SCHEDULE}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case `${UPDATE_SCHEDULE}_REJECTED`: {
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
