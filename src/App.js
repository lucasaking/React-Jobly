import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Navigation from "./Navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
