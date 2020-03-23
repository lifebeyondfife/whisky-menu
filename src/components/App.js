import React from 'react';
import Filter from './container/Filter';
import Whisky from './container/Whisky';
import Title from './container/Title';
import './App.css';

class App extends React.Component {
  constructor({whiskys}) {
    super({whiskys});
    this.state = {
      filterText: ''
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Filter filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
        <Whisky filterText={this.state.filterText} whiskys={this.props.whiskys} />
      </div>
    );
  }
}

export default App;
