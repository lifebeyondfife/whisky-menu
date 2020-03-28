import React from 'react';
import './WhiskyDetails.css';

class WhiskyDetails extends React.Component {
  render() {
    const details = this.props.isToggleOn ? (null) : (
      <table className="WhiskyDetails" visible={this.props.isToggleOn}>
        <tbody>
          <tr>
            <td>Location:</td>
            <td>{`${this.props.whisky.location}`}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{`${this.props.whisky.age} years old`}</td>
          </tr>
        </tbody>
      </table>
    );

    return (
      <div>
        {details}
      </div>
    );
  }
}

export default WhiskyDetails;