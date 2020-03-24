import React from 'react';
import './Whisky.css';
import WhiskyName from '../presentation/WhiskyName';
import WhiskyDetails from '../presentation/WhiskyDetails';

class Whisky extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.whiskys.reduce((map, obj) => {
      map[obj.id] = {
        click: () => this.handleClick(obj.id),
        isToggleOn: true
      }
      return map;
    }, {});
  }

  handleClick(id) {
    this.setState(prevState => ({
      [id]: {
        click: prevState[id].click,
        isToggleOn: !prevState[id].isToggleOn,
      }
    }));
  };

  matchesText(filter, field) {
    return field && field.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  }

  render() {
    const whiskyNames = this.props.whiskys
      .filter(whisky => {
        return [whisky.name, whisky.state, '' + whisky.age, whisky.location.region, whisky.location.country]
          .some(f => this.matchesText(this.props.filterText.toLowerCase(), f));
      })
      .sort((a, b) => (a.name > b.name) - (a.name < b.name))
      .map(whisky => {
      return (
        <div key={whisky.id} className="container">
            <WhiskyName whisky={whisky} show={this.state[whisky.id]}/>
            <WhiskyDetails whisky={whisky} isToggleOn={this.state[whisky.id].isToggleOn}/>
        </div>
      );
    });
    return (
      <div className="Whisky">
        {whiskyNames}
      </div>
    );
  }
}

export default Whisky;