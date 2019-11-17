import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './images/Logo.png';
import './css/Header.css';

import {Link} from 'react-router-dom';

class Header extends Component{
  /*render(){
    return(
      <div className="Header">
        <header className="logo">
          <img src={logo} className="App-logo" alt="logo"></img>
          <h2>Welcome to React</h2>
        </header>
      </div>
    );
  };
}*/

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array
  };

  render(){
    const {title,items} = this.props;
    console.log(this.props);
    return(
      <div className="Header">
        <header className="logo">
          <img src={logo} className="App-logo" alt="logo" style={{width : "300px"}}></img>
          <h2 style={{color : "white"}}>{title}</h2>
          <ul className="Menu" style={{paddingRight : "1.75%"}}>
            {items.map((item, key)=> <li key={key}> <Link to={item.url}> {item.title}</Link></li>)}
          </ul>
        </header>
      </div>
    );
  };
}

export default Header;
