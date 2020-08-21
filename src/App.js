import React from 'react';

import Header from './component/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Home/Home';
import Companies from './component/Companies/Companies';
import CompanyProfile from './component/CompanyProfile/CompanyProfile';
import Project from './component/Project/Project';
import Profiles from './component/Profiles/Profiles';
import UserProfile from './component/UserProfile/UserProfile';
import MyProfileFeed from './component/MyProfileFeed/MyProfileFeed';
import Jobs from './component/Jobs/Jobs';
import ChatFooter from './component/Shared/ChatFooter';
import AddProject from './component/Posts/AddProject';
import AddJobs from './component/Posts/AddJobs';

function App() {

  return (
    <Router>
      <div className="wrapper">
        <Header></Header>
        <div className="App">
          <Switch>
              <Route exact path="/Home" component={Home}></Route>
              <Route exact path="/Companies" component={Companies}></Route>
              <Route exact path="/CompanyProfile" component={CompanyProfile}></Route>
              <Route exact path="/Project" component={Project}></Route>
              <Route exact path="/Profiles" component={Profiles}></Route>
              <Route exact path="/UserProfile" component={UserProfile}></Route>
              <Route exact path="/MyProfileFeed" component={MyProfileFeed}></Route>
              <Route exact path="/Jobs" component={Jobs}></Route>
              <Route exact path="/" component={Home}></Route>
          </Switch>
          <ChatFooter></ChatFooter>
        </div>
        <AddProject/>
        <AddJobs/>
      </div>
    </Router>

  );
}

export default App;
