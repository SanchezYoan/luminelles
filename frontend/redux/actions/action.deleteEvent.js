import { DELETE_EVENT } from "../constants";

const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    eventId: eventId,
  };
};

export default deleteEvent;
