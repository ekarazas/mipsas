import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { MainHeader } from "layout/headers/MainHeader";
import Home from "./pages/Home";
import Studies from "pages/Studies";
import PageNotFound from "pages/404";
import StudyDetails from "pages/StudyDetails";

const App: React.FC = () => {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/studies" component={Studies}></Route>
        <Route exact path="/studies/:studyID" component={StudyDetails}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </Router>
  );
};

export default App;
