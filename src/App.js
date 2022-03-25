import './App.css';
import React, { apolloClient } from "./lens-actions/apollo-client";
import { Component } from "react";
import { ApolloProvider } from "@apollo/client";
import { login } from "./lens-actions/login-user"
import ProfileForm from "./components/ProfileForm"
import { explorePublications } from './lens-actions/explore-publications';


class App extends Component {

  handleLogin() {
    login();
  }

  handleExplore() {
    explorePublications({
      "sortCriteria": "TOP_COLLECTED",
      "limit": 10
    }
    );
    var data = this.props.data;
    console.log(data.explorePublications.items[1]);
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div id="main">
          <button onClick={this.handleLogin}>Connect to Wallet</button>
          <ProfileForm />
          <button onClick={this.handleExplore}>Explore Posts</button>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
