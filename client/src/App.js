import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import client from './ApolloClient';
import Header from './components/Header';
import Home from './views/Home';
import ByLocation from './views/ByLocation';
import Apartment from './views/Apartment';
// import ApartmentView from "./views/ApartmentView";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <main>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/apartments/:id" component={Apartment} />
              <Route path="/location" component={ByLocation} />
            </Switch>
          </main>
        </Router>
      </ApolloProvider>
    );
  }
}