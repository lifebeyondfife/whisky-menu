import React from 'react';
import './Whisky.css';
import WhiskyName from '../presentation/WhiskyName';
import WhiskyDetails from '../presentation/WhiskyDetails';

class Whisky extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.whiskys.reduce((map, obj) => {
      map[obj.name] = {
        click: () => this.handleClick(obj.name),
        isToggleOn: true
      }
      return map;
    }, {});
  }

  handleClick(whiskyName) {
    this.setState(prevState => ({
      [whiskyName]: {
        click: prevState[whiskyName].click,
        isToggleOn: !prevState[whiskyName].isToggleOn,
      }
    }));
  };

  render() {
    let whiskyNames = this.props.whiskys.map(whisky => {
      return (
        <div key={whisky.name} className="container">
            <WhiskyName whisky={whisky} show={this.state[whisky.name]}/>
            <WhiskyDetails whisky={whisky} isToggleOn={this.state[whisky.name].isToggleOn}/>
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