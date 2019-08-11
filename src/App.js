import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const headers = ["A", "B", "C", "D", "E"];
    return (
      <Spreadsheet headers={headers} />
      );
  }
}

class Spreadsheet extends React.Component {
   render() {
      const headerData = this.props.headers
      console.log("headerData: " + headerData);
      console.log("this.props.headers: " + this.props.headers);
      return(
        <table className="table">
          <thead>
            <TableHeader headers={headerData} />
          </thead>
          <tbody>
            <Line headers={headerData} />
          </tbody>
        </table>
      )
    }
  }

const TableHeader = props => {
    console.log("props inside TableHeader: " + props.headers);
    const header = props.headers.map((name, index) => {
    return(
          <th key={index} >{name}</th>
        )

  })
  return(
    <tr>
      {header}
    </tr>
  )
}


const Line = props => {
  const row = props.headers.map((name, index) => {
    return (
        <TableInput key={index} />
    )
  })
  return (<tr>{row}</tr>)
}

class TableInput extends React.Component {
  render() {
    return (
      <td className="border border-dark">
        <input type="text" className="form-control spreadsheet-input" />
      </td>
    )
  }
}

export default App;
