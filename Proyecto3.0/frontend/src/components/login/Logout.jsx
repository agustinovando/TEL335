import React from "react";
import { removeToken } from "../utils/tokenUtils";

const Logout = () => {
  const handleLogout = () => {
    removeToken();
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
