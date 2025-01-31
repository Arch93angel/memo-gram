import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
// import { setConnected, addMessage } from "./websocketSlice";
import { fetchStories } from "./storiesSlice";
import { AppDispatch } from "./store"; // ✅ Import AppDispatch

// const useWebSocket = (url: string) => {
//   const dispatch = useDispatch();
//   const socketRef = useRef<WebSocket | null>(null);

//   useEffect(() => {
//     socketRef.current = new WebSocket(url);

//     socketRef.current.onopen = () => {
//       dispatch(setConnected(true));
//       console.log("WebSocket Connected");
//     };

//     socketRef.current.onmessage = (event) => {
//       dispatch(addMessage(event.data));
//     };

//     socketRef.current.onclose = () => {
//       dispatch(setConnected(false));
//       console.log("WebSocket Disconnected");
//     };

//     return () => {
//       socketRef.current?.close();
//     };
//   }, [url, dispatch]);

//   return socketRef;
// };

// export default useWebSocket;



const useWebSocket = () => {
  const dispatch = useDispatch<AppDispatch>(); // ✅ Use AppDispatch

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/api/ws/stories/");

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      console.log("New data received:", event.data);
      dispatch(fetchStories()); // Fetch updated data from API
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(`Closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.error(`Connection closed with error code ${event.code}`);
      }
    };

    return () => socket.close(); // Cleanup on unmount
  }, [dispatch]);
};

export default useWebSocket;
