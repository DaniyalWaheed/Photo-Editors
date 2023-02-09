import React from "react";

import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import Homepage from "./Screens/Homepage";
import { history } from "./history";
import ServiceDetailsPage from "./Screens/Homepage/ServiceDetailsPage";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/services" component={ServiceDetailsPage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
