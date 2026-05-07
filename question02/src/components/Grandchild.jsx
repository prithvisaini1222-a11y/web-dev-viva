import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h4>GrandChild Component</h4>
      <p>User Name: {user}</p>
    </div>
  );
}

export default GrandChild;