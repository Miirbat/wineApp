import React, { Component } from 'react';
import grapeData from './grapeData';
import columns from './grapeColumns';

import { Table, Button } from 'antd';

class GrapeTable extends Component {
  onRowClick (a,b,c) {
    console.log(a, b, c);
  }
  render() {
    return (
      <div>
        <Table dataSource={grapeData} columns={columns} onRowClick={this.onRowClick.bind(this)} />
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
      </div>
    )
  }
}

export default GrapeTable
