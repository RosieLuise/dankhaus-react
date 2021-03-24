import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron></Jumbotron>
        <Overview></Overview>
        <Panel></Panel>
        <Cards></Cards>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;