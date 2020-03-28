import React from 'react';
import './Whisky.css';
import WhiskySection from './WhiskySection';

class Whisky extends React.Component {
  matchesText(filter, field) {
    return field && field.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  }

  render() {
    
    // create a dictionary { 'speyside': [ { speysideWhisky1, speysideWhisky2, ...} ] }
    const categorisedWhiskys = { 'Speyside': [
        { "id": 13, "name": "Springbank 15", "age": 15, "location": {"country": "Scotland", "region": "Campbeltown"}, "state": "Opened"},
        { "id": 14, "name": "Dalmore 18", "age": 18, "location": {"country": "Scotland", "region": "Highland"}, "state": "Opened"},
        { "id": 15, "name": "Glenmorangie 10", "age": 10, "location": {"country": "Scotland", "region": "Highland"}, "state": "Closed"},  
      ],
      'Highland': [
        { "id": 19, "name": "Oban 14", "age": 14, "location": {"country": "Scotland", "region": "Highland"}, "state": "Opened"},
        { "id": 20, "name": "Glen Moray 15", "age": 15, "location": {"country": "Scotland", "region": "Speyside"}, "state": "Opened"},
        { "id": 21, "name": "Westland's Sherry Wood", "age": 3, "location": {"country": "USA"}, "state": "Opened"},
      ]
    }
    
    return (
      <div className="Whisky">
        {
          Object.keys(categorisedWhiskys).map((key, index) => ( 
            <WhiskySection whiskys={categorisedWhiskys[key]} category={key} />
          ))
        }
      </div>
    );
  }
}

export default Whisky;