import React from "react";

function Message({ text, username }) {
  return (
    <div>
      <p>
        {username}: {text}
      </p>
    </div>
  );
}

export default Message;
