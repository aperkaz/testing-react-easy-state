import React, { Component } from 'react';
import { view } from 'react-easy-state';
import clock from './store';
import './App.css';

const Timer = view(() => (
  <div style={{margin: "5em"}}>{clock.timer}s</div>
));

setInterval(() => (clock.timer++), 1000);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer/>
      </div>
    );
  }
}

export default App;
