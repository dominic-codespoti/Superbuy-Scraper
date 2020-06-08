import '../Style/style.css';
import React from 'react';
import io from 'socket.io-client';
import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Table from '../Components/Table'

class Scraper extends React.Component {
  constructor(props, context){
    super(props, context);
    this.getItemFromSocket = this.getItemFromSocket.bind(this);
  }

  state = {
    data: []
  };

  componentDidMount = () => {
    this.getItemFromSocket(this);
  }

  render() {
    return (
      <main>
        <Header title="Clothes"></Header>
        <NavBar></NavBar>
        <section class="main">
          <h1 id="heading">Clothing</h1>
          <Table item={this.state.data}></Table>
        </section>
        <Footer></Footer>
      </main>
    );
  }

  getItemFromSocket = () => {
    var socket = io.connect('http://' + document.domain + ':5000/handle')
    var items_received = new Array("Name, Price, Link, Picture")
    var context = this
    socket.on('connect', function(msg){
      context.createItem(msg, items_received)
    })
  }

  createItem = (msg, items_received) =>{
    if (msg != null) {
      var itemAsJson = JSON.parse(JSON.stringify(msg))
      var itemAsArray = [itemAsJson["name"], itemAsJson["price"], itemAsJson["link"], itemAsJson["image"]]

      if (items_received.some(term => itemAsJson["name"].toLowerCase().includes(term))){
        console.log("Already found " + itemAsJson["name"])
        return
      }

      items_received.push(itemAsArray)
      
      var items = this.state.data;
      items.push(itemAsArray);
      this.setState({data: items});
    }
  }
}


export default Scraper;
