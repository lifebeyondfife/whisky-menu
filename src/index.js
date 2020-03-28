import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import whiskys from './whiskys.js';

Array.prototype.groupBy = function(prop) {
    return this.reduce(function(groups, item) {
        const val = item[prop]
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
    }, {})
}

ReactDOM.render(<App whiskys={whiskys.whiskyList} />, document.getElementById('root'));
