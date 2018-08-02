import React, { Component } from 'react';
//import { LineChart } from 'react-chartkick';
import { LineChart } from 'react-easy-chart';

export default class SalesGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yMax: 0,
      data: []
    };
  }
  componentDidMount() {
    const { sales } = this.props;
    let yMax = 0,
      retailValues = [],
      wholesaleValues = [];

    // Populate the graph array data points
    sales.map(sale => {
      yMax = Math.max(yMax, sale.retailSales, sale.wholesaleSales);
      retailValues.push({ x: sale.weekEnding, y: sale.retailSales });
      wholesaleValues.push({ x: sale.weekEnding, y: sale.wholesaleSales });
    });
    this.setState({
      yMax,
      data: [retailValues, wholesaleValues]
    });
  }
  render() {
    return (
      <div className="col-md-7" style={chartStyle}>
        Retail Sales
        <LineChart
          xtitle="Date"
          xType={'text'}
          yDomainRange={[0, this.state.yMax]}
          axes
          width={800}
          height={650}
          data={this.state.data}
          lineColors={['#46a8f6', '#9ba6bf']}
          axisLabels={{ x: 'Date', y: 'Sales' }}
        />
      </div>
    );
  }
}
const chartStyle = { backgroundColor: 'white', borderRadius: '4px' };
