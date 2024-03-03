import { ADD_EVENT } from "../constants";

const serializeEventInfos = (event) => {
  return {
    id: event.id,
    title: event.title,
    price: event.price,
  };
};

const initialState = {
  eventInfos: [],
};

const reducerEvents = (state = initialState, action) => {
  // return state
  switch (action.type) {
    case ADD_EVENT:
    default:
      return initialState;
  }
};

export default reducerEvents;
