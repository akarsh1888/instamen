import React from "react";
// Routing
import { Switch, Route } from "react-router-dom";

// Styling
import "./App.css";
// COMPONENTS
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);


function App() {
  return (
    <div>
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
      
    </div>
  );
}

export default App;
