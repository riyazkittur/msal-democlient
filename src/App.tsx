import React from "react";
import LoginConnector from "./../src/pages/connectors/loginConnector";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>MSAL Demo Client</h1>

      <LoginConnector />
    </div>
  );
}

export default App;
