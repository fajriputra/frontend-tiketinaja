import { USER_LOGIN } from "store/auth/constans";

const initialState = {
  userId: "",
  isError: false,
  isLoading: false,
  message: "",
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case `${USER_LOGIN}_PENDING`: {
      return {
        ...state,
        userId: "",
        isError: false,
        isLoading: true,
      };
    }
    case `${USER_LOGIN}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        userId: action.payload.data.data.id,
        message: action.payload.data.message,
      };
    }
    case `${USER_LOGIN}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        userId: "",
        message: action.payload.response.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
