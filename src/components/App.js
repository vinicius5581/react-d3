import React, { Component } from 'react';
import BarChart from './BarChart';
import './App.css';

class App extends Component {
  
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 'barChart'
  }

  render() {
    return (
      <div className="App">
        <BarChart 
          id={this.state.id}
          data={this.state.data} 
          width={this.state.width} 
          height={this.state.height}
        />
      </div>
    );
  }
}

export default App;
