import React from "react";
import { GlobalProvider } from "../context/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Watch from "../pages/Watch";
import Home from "../pages/Home";
import "./App.scss";
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/watch/:id">
            <Watch />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
