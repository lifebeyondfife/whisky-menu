import React from 'react';
import './Whisky.css';
import WhiskySection from './WhiskySection';

class Whisky extends React.Component {
  constructor(props) {
    super(props);
    this.collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    this.whiskysByLocation = this.whiskysByLocation.bind(this);
    this.whiskysByAge = this.whiskysByAge.bind(this);
    this.whiskysToBeOpened = this.whiskysToBeOpened.bind(this);
    this.categorisationFunction = {
      "location": this.whiskysByLocation,
      "age": this.whiskysByAge,
      "closed": this.whiskysToBeOpened,
    }
  }

  whiskysByLocation() {
    const whiskyRegionKeyValues = Object.entries(this.props.whiskys
      .filter(whisky => whisky.state === "Opened")
      .reduce((map, obj) => {
        if (map[obj.location]) {
          map[obj.location].push(obj);
        } else {
          map[obj.location] = [obj];
        }
        return map;
      }, {}));

    return whiskyRegionKeyValues
      .filter(([key, value]) => value[0].isScotch)
      .sort(([ak, av], [bk, bv]) => this.collator.compare(ak, bk))
      .concat(whiskyRegionKeyValues
        .filter(([key, value]) => !value[0].isScotch)
        .sort(([ak, av], [bk, bv]) => this.collator.compare(ak, bk)));
  }

  whiskysByAge() {
    return Object.entries(this.props.whiskys
      .filter(whisky => whisky.state === "Opened")
      .reduce((map, obj) => {
        const key = obj.age <= 3 ? "Unspecified" : `${obj.age} years old`;
        if (map[key]) {
          map[key].push(obj);
        } else {
          map[key] = [obj];
        }
        return map;
      }, {}))
        .sort(([ak, av], [bk, bv]) => this.collator.compare(ak, bk));
  }

  whiskysToBeOpened() {
    return [
      ['', this.props.whiskys
        .filter(whisky => whisky.state === 'Closed')
        .sort((a, b) => this.collator.compare(a.name, b.name))]
    ];
  }

  render() {
    return (
      <div className="Whisky">
        {this.categorisationFunction[this.props.category]()
          .map(([key, value]) => (
            <WhiskySection key={key} category={key} whiskys={value} />
          ))}
      </div>
    );
  }
}

export default Whisky;