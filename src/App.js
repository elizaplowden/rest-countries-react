import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';

const url = 'https://restcountries.eu'

class App extends React.Component {
  render(){
  return (
    <div>
      <Header />
      <Filter />
      <Countries />
    </div>
    );
  };
}

export default App;
