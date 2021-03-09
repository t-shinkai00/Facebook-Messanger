import React, { useState, useEffect } from "react";
import { Button, Input, InputLabel } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "sonny", text: "hey guys" },
    { username: "qazi", text: "whats up" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your username"));
  }, []);

  const sendMessage = (e) => {
    //all the logic to send a message
    e.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello {username}!!</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a messages...</InputLabel>
          <Input onChange={(e) => setInput(e.target.value)} value={input} />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>

      {/* messages themselves */}
      {messages.map((message) => (
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}

export default App;
