import React from 'react';
import './Whisky.css';
import WhiskySection from './WhiskySection';

class Whisky extends React.Component {
  constructor(props) {
    super(props);
    this.categorisationFunction = {
      "location": this.whiskysByLocation,
      "age": this.whiskysByAge,
      "closed": this.whiskysToBeOpened,
    }
  }

  whiskysByLocation(whiskys) {
    const categorisedWhiskys = {}

    whiskys
      .filter(whisky => whisky.state === "Opened")
      .forEach(element => {
        if (!categorisedWhiskys[element.location]) {
          categorisedWhiskys[element.location] = [element];
        } else {
          categorisedWhiskys[element.location].push(element);
        }
      });

    return categorisedWhiskys;
  }

  whiskysByAge(whiskys) {
    const categorisedWhiskys = {}

    whiskys
      .filter(whisky => whisky.state === "Opened")
      .forEach(element => {
        if (element.age <= 3) {
          if (!categorisedWhiskys["Unspecified"]) {
            categorisedWhiskys["Unspecified"] = [element];
          } else {
            categorisedWhiskys["Unspecified"].push(element);
          }
        } else {
          const category = `${element.age} years old`;
          if (!categorisedWhiskys[category]) {
            categorisedWhiskys[category] = [element];
          } else {
            categorisedWhiskys[category].push(element);
          }
        }
      });

    return categorisedWhiskys;
  }

  whiskysToBeOpened(whiskys) {
    return {'': whiskys.filter(whisky => whisky.state === 'Closed')};
  }

  matchesText(filter, field) {
    return field && field.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  }

  render() {
    const categorisedWhiskys = this.categorisationFunction[this.props.category](this.props.whiskys);
    const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    let whiskySection = null;

    if (this.props.category === "location") {
      whiskySection = (
        <div>
          <WhiskySection key="Campbeltown" whiskys={categorisedWhiskys["Campbeltown"]} category="Campbeltown" />
          <WhiskySection key="Highland" whiskys={categorisedWhiskys["Highland"]} category="Highland" />
          <WhiskySection key="Islay" whiskys={categorisedWhiskys["Islay"]} category="Islay" />
          <WhiskySection key="Lowland" whiskys={categorisedWhiskys["Lowland"]} category="Lowland" />
          <WhiskySection key="Speyside" whiskys={categorisedWhiskys["Speyside"]} category="Speyside" />
          {
            Object.keys(categorisedWhiskys)
              .filter(key => ["Campbeltown", "Highland", "Islay", "Speyside"].indexOf(key) < 0)
              .sort(collator.compare)
              .map(key => ( 
                <WhiskySection key={key} whiskys={categorisedWhiskys[key]} category={key} />
              )
            )
          }
        </div>
      );
    } else {
      whiskySection = (
        <div>
          {
            Object.keys(categorisedWhiskys)
              .sort(collator.compare)
              .map(key => ( 
                <WhiskySection key={key} whiskys={categorisedWhiskys[key]} category={key} />
              )
            )
          }
        </div>
      )
    }

    return (
      <div className="Whisky">
        {whiskySection}
      </div>
    );
  }
}

export default Whisky;