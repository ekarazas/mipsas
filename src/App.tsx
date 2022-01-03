import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { MainHeader } from "layout/headers/MainHeader";
import Home from "./pages/Home";
import Studies from "pages/Studies";

const App: React.FC = () => {
  return (
    <Router>
      <MainHeader />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/studies" component={Studies}></Route>
    </Router>
  );
};

export default App;
