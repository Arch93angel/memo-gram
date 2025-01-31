import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WebSocketState {
  messages: string[];
  isConnected: boolean;
}

const initialState: WebSocketState = {
  messages: [],
  isConnected: false,
};

const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    addMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setConnected, addMessage } = websocketSlice.actions;
export default websocketSlice.reducer;
