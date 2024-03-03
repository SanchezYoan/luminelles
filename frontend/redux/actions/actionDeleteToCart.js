import { DELETE_COMMENT } from "../constants";

const deleteMessage = (messageId) => {
  return {
    type: DELETE_COMMENT,
    messageId: messageId,
  };
};

export default deleteMessage;
