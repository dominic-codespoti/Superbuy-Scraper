import '../Style/style.css';
import React from 'react';
import io from 'socket.io-client';
import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function App() {
  return (
    <main>
      <Header title="Clothes"></Header>
      <NavBar></NavBar>
      <section class="main">
        <h1 id="heading">Clothing</h1>
        {
          scrapeAndLoad()
        }
      </section>		
      <Footer></Footer>
    </main>
  );
}

function scrapeAndLoad() {
  var search_terms = ["shirt", "t-shirt", "crewneck", "hoodie", "jumper"]
  var socket = io.connect('http://' + document.domain + ':5000/handle')
  var items_received = new Array("Name, Price, Link, Picture")
  var previouslyFound = false
  var iteration = 0
  socket.on('connect', function(msg) {
    console.log(msg)
      if (msg != null) {
          items_received.push(JSON.stringify(msg))
          var split = items_received[items_received.length - 1].split(",")
          var name = split[0]
          var price = split[1]
          var link = split[2]
          var image = split[3]

          for (var i = 0; i < iteration; i++) {
              if (items_received[i].includes(name) === true) {
                  previouslyFound = true
              }
          }

          var item_string = '<tr>'
          + '<td>' + name + '</td>'
          + '<td>' + price + '</td>'
          + '<td>' + link + '</td>'
          + '<td> <img src="' + image + '" alt="" border=3 height=100 width=300></img> </td>'
          + '</tr>'

          if (search_terms.some(term => name.toLowerCase().includes(term)) && previouslyFound === false) {
              var node = React.findDOMNode(this); //todo, fix in react
              node.append(item_string)
          }

          previouslyFound = false
          iteration += 1
      }
  })
}

export default App;
