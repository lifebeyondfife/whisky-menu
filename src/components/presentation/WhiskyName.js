import React from 'react';
import './WhiskyName.css';

class WhiskyName extends React.Component {
  constructor({whisky, show}) {
    super({whisky, show});
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.show.click();
  }

  render() {
    return (
      <div className="container">
        <span className="left">{this.props.whisky.name}</span>
        <span className="right"><button onClick={this.handleClick}>{this.props.show.isToggleOn ? 'v' : '^'}</button></span>
        <span className="centre">&nbsp;</span>
      </div>
    );
  }
}

export default WhiskyName;