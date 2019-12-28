import React from 'react';
import Filter from './container/Filter';
import Whisky from './container/Whisky';
import Title from './container/Title';
import './App.css';

const whiskys = [
  { 'name': 'Aberlour 18', 'age': 18, 'state': 'Opened', 'price': 95, 'location': {'country': 'Scotland', 'region': 'Speyside'}},
  { 'name': 'GlenDronach 12', 'age': 12, 'state': 'Opened', 'price': 45, 'location': {'country': 'Scotland', 'region': 'Highland'}},
  { 'name': 'GlenDronach 18', 'age': 18, 'state': 'Opened', 'price': 115, 'location': {'country': 'Scotland', 'region': 'Highland'}},
  { 'name': 'Yamazaki 12', 'age': 12, 'state': 'Opened', 'price': 100, 'location': {'country': 'Japan'},},
];


function App() {
  return (
    <div className="App">
      <Title />
      <Filter />
      <Whisky whiskys={whiskys} />
    </div>
  );
}

export default App;
