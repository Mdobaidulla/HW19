import React, { Component } from 'react';
import Pictures from './Images.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    }
  }
  render() {
    return (
      <>
        <h2>Giffy!</h2>
        <Pictures searchQuery={this.state.searchQuery} onChange={this.onTextBoxChange}/>
      </>
    )
  }
  onTextBoxChange = (event) => {
    console.log('On Text Change', event.target.value);
    this.setState ({
      searchQuery: event.target.value,
    });
  }
}
export default App;