import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';

class App extends React.Component {
  render(){
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Filter />
         <Countries />
      </Route>

    </Router>
    );
  };
}

export default App;
