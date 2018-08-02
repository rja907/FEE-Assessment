import React, { Component } from 'react';
import iData from './data/dataset1.json';
import './App.css';
import Header from './components/Header';
import DataTable from './components/DataTable';
import DataProduct from './components/DataProduct';
import SalesGraph from './components/SalesGraph';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputData: iData
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row" style={contentDivStyle}>
          <div style={{ marginLeft: '50px' }} />
          <DataProduct product={this.state.inputData[0]} />
          <div className="col-md-1" />
          <SalesGraph sales={this.state.inputData[0].sales} />
        </div>
        <DataTable tableData={this.state.inputData[0].sales} />
      </div>
    );
  }
}

const contentDivStyle = { marginBottom: '10px' };

export default App;
