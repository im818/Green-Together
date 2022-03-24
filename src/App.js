import './App.css';
import { apolloClient } from "./components/apollo-client";
import { Component } from "react";
import { ApolloProvider } from "@apollo/client";
import { login } from "./components/login-user"

class App extends Component {

  handleLogin() {
    login();
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div id="main">
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
