import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Router
import { BrowserRouter } from "react-router-dom";

//Store
import { store, persistor } from "./redux/store";

//Redux
import { Provider } from "react-redux";

// Redux Persist
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
