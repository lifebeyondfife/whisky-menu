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

  getWhiskySections(whiskys, filter) {
    const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    return Object.keys(whiskys)
      .filter(key => filter(whiskys[key][0]))
      .sort(collator.compare)
      .map(key => ( 
        <WhiskySection key={key} whiskys={whiskys[key]} category={key} />
      )
    );
  }

  render() {
    const categorisedWhiskys = this.categorisationFunction[this.props.category](this.props.whiskys);

    if (this.props.category === "location") {
      return (
        <div className="Whisky">
          {this.getWhiskySections(categorisedWhiskys, x => x.isScotch)}
          {this.getWhiskySections(categorisedWhiskys, x => !x.isScotch)}
        </div>
      );
    } else {
      return (
        <div className="Whisky">
          {this.getWhiskySections(categorisedWhiskys, x => true)}
        </div>
      )
    }
  }
}

export default Whisky;