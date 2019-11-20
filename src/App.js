import React from "react";
// Routing
import { Switch, Route } from "react-router-dom";

// Styling
import "./App.css";
// COMPONENTS
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";



function App() {
  return (
    <div>
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      
    </div>
  );
}

export default App;
