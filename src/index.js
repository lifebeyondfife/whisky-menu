import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import whiskys from './whiskys.js';

ReactDOM.render(<App whiskys={whiskys.whiskyList} />, document.getElementById('root'));
