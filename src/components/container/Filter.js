import React from 'react';
import './Filter.css';

class Filter extends React.Component {
  constructor({filterText, onFilterTextChange}) {
    super({filterText, onFilterTextChange});
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }

  render() {
    return (
      <div className="Filter">
        <form>
          <input type="text" placeholder="Filter..." value={this.props.filterText} onChange={this.handleFilterTextChange} />
        </form>
      </div>
    );
  }
}

export default Filter;