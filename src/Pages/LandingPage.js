import '../Style/style.css';
import React from 'react';
import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function App() {
  return (
    <main>
      <Header title="Superbuy Scraper"></Header>
      <NavBar></NavBar>
      <section className="main">
        <h1>Welcome!</h1>
        <p>
          To do list: Fix links, add images properly, automate python script in
          the background
        </p>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default App;
