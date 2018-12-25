//react imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//containers
import Dashboard from "./containers/dashboard/Dashboard";
import UserDetails from "./containers/userDetails/UserDetails";
import RepositoryDetails from "./containers/repositoryDetails/RepositoryDetails";
import ContributorDetails from "./containers/contributorDetails/ContributorDetails";
//styles
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/details/:userName/:id" component={UserDetails} />
            <Route path="/repo/:repoName/:id" component={RepositoryDetails} />
            <Route
              path="/contributors/:repoName/:id"
              component={ContributorDetails}
            />
            <Route path="*" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
