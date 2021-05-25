import React from 'react';
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
