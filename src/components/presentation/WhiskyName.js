import React from 'react';
import './WhiskyName.css';

class WhiskyName extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.show.click();
  }

  render() {
    return (
      <div className="container">
        <span className="left">{this.props.whisky.name}</span>
        <span className="right"><button onClick={this.handleClick}><span role="img" aria-labelledby="whisky">🥃</span></button></span>
        <span className="centre">&nbsp;</span>
      </div>
    );
  }
}

export default WhiskyName;