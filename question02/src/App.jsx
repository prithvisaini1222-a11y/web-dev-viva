import React from "react";
import Parent from "./components/Parent";
import UserContext from "./context/UserContext";

function App() {
  const userName = "Prithvi";

  return (
    <div >
      <h1>React Context API Example</h1>

      <UserContext.Provider value={userName}>
        <Parent />
      </UserContext.Provider>
    </div>
  );
}

export default App;