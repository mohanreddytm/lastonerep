import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://lastonerep-tg16.vercel.app/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(message);
  console.log("mo");

  return (
    <div>
      <h1>Fullstack App</h1>
      <p className="one">one</p>
    </div>
  );
}

export default App;
