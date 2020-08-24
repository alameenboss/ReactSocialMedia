import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Shared/Header/Header';
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
const AppLayout = () => {
    return (
        <Router>
            <>
                <Header></Header>
                <div className="App">
                    <Switch>
                        <Route path="/app/Home" component={Home}></Route>
                        <Route exact path="/app/Companies" component={Companies}></Route>
                        <Route exact path="/app/CompanyProfile" component={CompanyProfile}></Route>
                        <Route exact path="/app/Project" component={Project}></Route>
                        <Route exact path="/app/Profiles" component={Profiles}></Route>
                        <Route exact path="/app/UserProfile" component={UserProfile}></Route>
                        <Route exact path="/app/MyProfileFeed" component={MyProfileFeed}></Route>
                        <Route exact path="/app/Jobs" component={Jobs}></Route>
                    </Switch>
                    <ChatFooter></ChatFooter>
                </div>
                <AddProject />
                <AddJobs />
            </>
        </Router>
    )
}

export default AppLayout
