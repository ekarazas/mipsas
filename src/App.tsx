import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
    </Router>
  );
};

export default App;
