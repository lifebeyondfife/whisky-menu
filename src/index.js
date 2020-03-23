import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const whiskys = [
  { 'name': 'Aberlour 18', 'age': 18, 'state': 'Opened', 'price': 95, 'location': {'country': 'Scotland', 'region': 'Speyside'}},
  { 'name': 'GlenDronach 12', 'age': 12, 'state': 'Opened', 'price': 45, 'location': {'country': 'Scotland', 'region': 'Highland'}},
  { 'name': 'GlenDronach 18', 'age': 18, 'state': 'Opened', 'price': 115, 'location': {'country': 'Scotland', 'region': 'Highland'}},
  { 'name': 'Yamazaki 12', 'age': 12, 'state': 'Opened', 'price': 100, 'location': {'country': 'Japan'}},
];

ReactDOM.render(<App whiskys={whiskys} />, document.getElementById('root'));

