import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";

import configureStore from "./redux/configureStore";

const store = configureStore();

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
