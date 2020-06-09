import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Table extends React.Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Crewneck</Tab>
          <Tab>Shorts</Tab>
          <Tab>Tops</Tab>
          <Tab>Pants</Tab>
          <Tab>Outerwear</Tab>
        </TabList>
        <TabPanel>
          <table>
            <tbody>
              {this.props.item.filter(item => item["classification"] === "Crewneck").map(item => (
                  <Row item = {item}/>
              ))}
            </tbody>
          </table> 
        </TabPanel>
        <TabPanel>
          <table>
            <tbody>
              {this.props.item.filter(item => item["classification"] === "Shorts").map(item => (
                  <Row item = {item}/>
              ))}
            </tbody>
          </table> 
        </TabPanel>
        <TabPanel>
          <table>
            <tbody>
              {this.props.item.filter(item => item["classification"] === "Tops").map(item => (
                  <Row item = {item}/>
              ))}
            </tbody>
          </table> 
        </TabPanel>
        <TabPanel>
          <table>
            <tbody>
              {this.props.item.filter(item => item["classification"] === "Pants").map(item => (
                  <Row item = {item}/>
              ))}
            </tbody>
          </table> 
        </TabPanel>
        <TabPanel>
          <table>
            <tbody>
              {this.props.item.filter(item => item["classification"] === "Outerwear").map(item => (
                  <Row item = {item}/>
              ))}
            </tbody>
          </table> 
        </TabPanel>
      </Tabs>
    );
  }
}

const Row = ({ item }) => (
  <tr>
    <td>
        Name: {item["name"]}
    </td>
    <td>
        Price: {item["price"]}
    </td>
    <td>
        Link: {item["link"]}
    </td>
    <td>
       <img src={item["image"]} alt={item["name"]} width="500" height="600"></img> 
    </td>
  </tr>
);

export default Table;

