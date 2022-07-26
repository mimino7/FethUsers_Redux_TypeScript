import React from "react";
import PhotoList from "./components/PhotoList";
import UserList from "./components/UserList";

import "./app.css";

const App = () => {
  return (
    <div className="wrap">
      <UserList />
      <PhotoList />
    </div>
  );
};

export default App;
