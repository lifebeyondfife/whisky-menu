import React from 'react';
import './WhiskyDetails.css';

class WhiskyDetails extends React.Component {
  constructor({whisky, show}) {
    super({whisky, show});
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const details = this.state.isToggleOn ? (null) : (
      <table className="WhiskyDetails" visible={this.state.isToggleOn}>
        <tbody>
          <tr>
            <td>Location:</td>
            <td>{`${this.props.whisky.location.region || this.props.whisky.location.country}`}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{`${this.props.whisky.age} years old`}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>{`£${this.props.whisky.price}`}</td>
          </tr>
          <tr>
            <td>State:</td>
            <td>{this.props.whisky.state}</td>
          </tr>
        </tbody>
      </table>
    );

    return (
      <div>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'v' : '^'}</button>
        {details}
      </div>
    );
  }
}

export default WhiskyDetails;