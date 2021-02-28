import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* input feild */}
      {/* button */}
      {/* messages themselves */}
      <input onChange={(e) => setInput(e.target.value)} />
      <p>{input}</p>
      <button>Send</button>
    </div>
  );
}

export default App;
