import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    //all the logic to send a message
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World</h1>

      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={sendMessage}>Send</button>

      {/* messages themselves */}
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
