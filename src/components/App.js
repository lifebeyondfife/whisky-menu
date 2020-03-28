import React from 'react';
import Filter from './container/Filter';
import Whisky from './container/Whisky';
import Title from './presentation/Title';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: new URLSearchParams(new URL(window.location).search).get('filter') || '',
      category: new URLSearchParams(new URL(window.location).search).get('category') || ''
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleCategoryChange(category) {
    this.setState({
      category: category
    });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Filter filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange}
          category={this.state.category} onCategoryChange={this.handleCategoryChange} />
        <Whisky filterText={this.state.filterText} category={this.state.category} whiskys={this.props.whiskys} />
      </div>
    );
  }
}

export default App;
