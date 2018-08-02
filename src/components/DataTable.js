import React from 'react';
import { Table } from 'reactstrap';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tableData } = this.props;

    return (
      <Table transparent="true" style={{ color: 'white' }}>
        <thead>
          <tr style={rowStyle}>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(rowData => {
            return (
              <tr style={rowStyle} key={rowData.weekEnding}>
                <th scope="row">{rowData.weekEnding}</th>
                <td>$ {rowData.retailSales / 1000} K</td>
                <td>$ {rowData.wholesaleSales / 1000} K</td>
                <td>{rowData.unitsSold}</td>
                <td>$ {rowData.retailerMargin / 1000} K</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

const rowStyle = { textAlign: 'center' };
