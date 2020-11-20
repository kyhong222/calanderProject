import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from '../pages/Main';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/calander" component={Main}/>
    </Switch>
  </Router>
);
// export default Routes;