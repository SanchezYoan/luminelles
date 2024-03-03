import { ADD_COMMENT } from "../constants";

const initialState = {
  existingComment: [],
};

const reducerComments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
    default:
      return state;
  }
};

export default reducerComments;
