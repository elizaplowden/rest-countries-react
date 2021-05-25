import React from 'react';
import Countries from './components/Countries';

const url = 'https://restcountries.eu'

class App extends React.Component {
  render(){
  return (
    <Countries />
    );
  };
}

export default App;
