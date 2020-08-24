import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/Auth/Login';
import AppLayout from './AppLayout';

function App() {

  return (
    <Router>
      <div className="wrapper">
        <div className="App">
          <Switch>
              <Route path="/app" component={AppLayout}></Route>
              <Route path="/" component={Login}></Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
