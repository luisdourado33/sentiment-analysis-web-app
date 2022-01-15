import React, { useContext } from "react";
import "./App.css";

import { AppContext } from "./context";

import Routes from "./Routes";

function App() {
  const { state } = useContext(AppContext);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
