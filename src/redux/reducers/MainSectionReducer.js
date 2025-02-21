import { SELECT_TRACK } from "../actions";

const initialState = {
  content: null,
};

const MainSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TRACK:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default MainSectionReducer;
