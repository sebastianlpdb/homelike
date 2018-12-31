import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import client from './ApolloClient';
import Header from './components/Header';
import Home from './views/Home';
import Apartments from './views/Apartments';
import Apartment from './views/Apartment';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Main>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/apartments" component={Apartments} />
              <Route path="/apartments/:id" component={Apartment} />
            </Switch>
          </Main>
        </Router>
      </ApolloProvider>
    );
  }
}