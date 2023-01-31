import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "assets/css/App.css";
import { LandingPage } from "pages";

function App() {
  return (
    <Router>
      <Route>
        <Redirect to="/" />
      </Route>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
