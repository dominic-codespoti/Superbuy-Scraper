import React from "react";

class Table extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.item.map(item => (
            <Row item = {item}/>
          ))}
        </tbody>
      </table>
    );
  }
}

const Row = ({ item }) => (
  <tr>
    <td>
        Name: {item[0]}
    </td>
    <td>
        Price: {item[1]}
    </td>
    <td>
        Link: {item[2]}
    </td>
    <td>
       <img src={item[3]} alt={item[1]} width="500" height="600"></img> 
    </td>
  </tr>
);

export default Table;

