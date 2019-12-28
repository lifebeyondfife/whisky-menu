import React from 'react';
import './WhiskyDetails.css';

function WhiskyDetails({whisky, show}) {
  if (!show) {
    return null;
  }

  return (
    <div>
      <table className="WhiskyDetails">
        <tbody>
        <tr>
            <td>Age:</td>
            <td>{`${whisky.age} years old`}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>{`£${whisky.price}`}</td>
          </tr>
          <tr>
            <td>State:</td>
            <td>{whisky.state}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WhiskyDetails;