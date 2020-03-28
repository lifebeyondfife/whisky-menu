import React from 'react';
import './WhiskySection.css';
import WhiskyName from '../presentation/WhiskyName';
import WhiskyDetails from '../presentation/WhiskyDetails';

class WhiskySection extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.whiskys) {
        return;
    }
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

  render() {
    if (!this.props.whiskys) {
        return (<div></div>);
    }
    const whiskyNames = this.props.whiskys
      .sort((a, b) => (a.name > b.name) - (a.name < b.name))
      .map(whisky => {
        return (
          <div key={whisky.id} className="container">
            <WhiskyName whisky={whisky} show={this.state[whisky.id]}/>
            <WhiskyDetails whisky={whisky} isToggleOn={this.state[whisky.id].isToggleOn}/>
          </div>
        );
      }
    );
    return (
      <div className="WhiskySection">
        <h2>{this.props.category}</h2>
        {whiskyNames}
      </div>
    );
  }
}

export default WhiskySection;
