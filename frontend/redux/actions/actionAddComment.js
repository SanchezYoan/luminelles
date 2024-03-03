import { ADD_COMMENT } from "../constants";

const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment: comment,
  };
};

export default addComment;
