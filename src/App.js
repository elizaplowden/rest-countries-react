import React from 'react';
import Countries from './components/Countries';
import Header from './components/Header';

const url = 'https://restcountries.eu'

class App extends React.Component {
  render(){
  return (
    <div>
      <Header />
      <Countries />
    </div>
    );
  };
}

export default App;
