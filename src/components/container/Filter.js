import React from 'react';
import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.categoryChange = this.categoryChange.bind(this);
  }

  categoryChange(event) {
    this.props.onCategoryChange(event.target.value);
  }

  render() {
    return (
      <div className="Filter">
        <form method="GET" action="/">
          <select name="category" value={this.props.category} onChange={this.categoryChange}>
            <option value="location">Location</option>
            <option value="age">Age</option>
            <option value="closed">In the cellar</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Filter;