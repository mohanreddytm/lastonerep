import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://lastonerep-tg16.vercel.app/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Fullstack App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
