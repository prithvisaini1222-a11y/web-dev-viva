import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
       
      />

      <h3>Live Preview:</h3>
      <p>{name}</p>
    </div>
  );
}

export default App;