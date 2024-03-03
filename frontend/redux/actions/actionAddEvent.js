import { ADD_EVENT } from "../constants";

const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    event: event,
  };
};

export default addEvent;
