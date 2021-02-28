import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    //all the logic to send a message
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World</h1>

      <form>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>

      {/* messages themselves */}
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
