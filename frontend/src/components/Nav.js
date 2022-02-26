import { slide as Menu } from 'react-burger-menu'
import React from "react";

class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {

    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/About">About</a>

      </Menu>
    );
  }
}

export default Nav;