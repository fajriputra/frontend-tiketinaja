import { GET_DATA_USER } from "store/user/constans";

const initialState = {
  userLoading: false,
  userData: {},
  userFailFetch: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DATA_USER}_PENDING`: {
      return {
        ...state,
        userData: initialState.userData,
        userFailFetch: initialState.userFailFetch,
        userLoading: true,
      };
    }
    case `${GET_DATA_USER}_FULFILLED`: {
      return {
        ...state,
        userLoading: false,
        userData: action.payload.data.data[0],
        userFailFetch: initialState.userFailFetch,
      };
    }
    case `${GET_DATA_USER}_REJECTED`: {
      return {
        ...state,
        userLoading: false,
        userFailFetch: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
