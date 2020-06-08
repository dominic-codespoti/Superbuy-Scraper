import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    
    render() {
      return (
        <section class="navigation">
            <ul>
                <Link to="/"> Index </Link>
                <Link to="/clothes"> Clothes </Link>
            </ul>
      </section>
      )
    }
}

export default NavBar;