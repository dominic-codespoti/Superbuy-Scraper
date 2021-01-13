import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <section className="header">
            <h1>{this.props.title}</h1>
            <h2>Welcome to Dominics Superbuy Scraper!</h2>
      </section>
      )
    }
}

export default Header;