import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import useWebSocket from "../redux/useWebSocket";

const Chat = () => {
  const [message, setMessage] = useState("");
  const messages = useSelector((state: RootState) => state.websocket.messages);
  const isConnected = useSelector((state: RootState) => state.websocket.isConnected);
  
  const socketRef = useWebSocket("ws://localhost:8000/ws/chat/");

  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ message }));
      setMessage("");
    }
  };

  return (
    <div>
      <h2>WebSocket Chat {isConnected ? "🟢" : "🔴"}</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
