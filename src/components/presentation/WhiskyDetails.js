import React from 'react';
import './WhiskyDetails.css';
import ReactHtmlParser from 'react-html-parser'; 

class WhiskyDetails extends React.Component {
  render() {
    const appearance = this.props.whisky.appearance ? (
      <tr>
        <th>Appearance:</th>
        <td>{this.props.whisky.appearance}</td>
      </tr>
    ) : (null);
    const nose = this.props.whisky.nose ? (
      <tr>
        <th>Nose:</th>
        <td>{this.props.whisky.nose}</td>
      </tr>
    ) : (null);
    const palate = this.props.whisky.palate ? (
      <tr>
        <th>Palate:</th>
        <td>{this.props.whisky.palate}</td>
      </tr>
    ) : (null);
    const finish = this.props.whisky.finish ? (
      <tr>
        <th>Finish:</th>
        <td>{this.props.whisky.finish}</td>
      </tr>
    ) : (null);
    return this.props.isToggleOn ? (null) : (
      <div className="WhiskyDetails">
        <table>
          <tbody>
            <tr>
              <th>Location:</th>
              <td>{this.props.whisky.location}</td>
            </tr>
            <tr>
              <th>Age:</th>
              <td>{`${this.props.whisky.age} years old`}</td>
            </tr>
            <tr>
              <th>ABV:</th>
              <td>{`${this.props.whisky.abv}%`}</td>
            </tr>
            {appearance}
            {nose}
            {palate}
            {finish}
          </tbody>
        </table>
        <p>{ReactHtmlParser(this.props.whisky.description)}</p>
      </div>
    );
  }
}

export default WhiskyDetails;