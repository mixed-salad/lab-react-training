import React from 'react';

class NumbersTable extends React.Component {
  //Public class field syntax
  //Any method that needs to be passed to an onSomthing attribute
  render() {
    let table = [];
    for (let i = 1; i <= this.props.limit; i++) {
      if (i % 2 === 0) {
        table.push(
          <div key={i} className="single-number red">
            {i}
          </div>
        );
      } else {
        table.push(
          <div key={i} className="single-number">
            {i}
          </div>
        );
      }
    }
    return <div className="numbers-table">{table}</div>;
  }
}

export default NumbersTable;
