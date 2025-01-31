import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import apiReducer from './storiesSlice';
import storiesReducer from './storiesSlice';
import listenerMiddleware from "../components/listeners";
import websocketReducer from "./websocketSlice"; // WebSocket slice



export const store = configureStore({
  reducer: {
    auth: authReducer,
    stories: storiesReducer,
    api: apiReducer,
    websocket: websocketReducer, // Add WebSocket reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store