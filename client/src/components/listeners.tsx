import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setToken } from "../redux/authSlice";
import { fetchStories } from "../redux/storiesSlice";

const listenerMiddleware = createListenerMiddleware();

// Automatically fetch stories when a new token is set
listenerMiddleware.startListening({
  actionCreator: setToken,
  effect: async (_, { dispatch }) => {
    dispatch(fetchStories()); // Fetch fresh data when token changes
  },
});

export default listenerMiddleware;
