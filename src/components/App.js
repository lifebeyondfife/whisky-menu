import React from 'react';
import Filter from './container/Filter';
import Whisky from './container/Whisky';
import Title from './presentation/Title';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: new URLSearchParams(new URL(window.location).search).get('category') || 'location'
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
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
        <Filter category={this.state.category} onCategoryChange={this.handleCategoryChange} />
        <Whisky category={this.state.category} whiskys={this.props.whiskys} />
      </div>
    );
  }
}

export default App;
