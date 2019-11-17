import React, { Component } from 'react';
import './Global/css/App.css';
import Header from './Global/Header';
import Form from './Global/Form'; 
import items from './data/menu'; 

import PropTypes from 'prop-types';

class App extends Component{
  static propTypes = {
    children:PropTypes.object.isRequired
  } 

  render(){
    const {children} = this.props;
    return(
      <div className="App" style={{backgroundColor : "#4287f5"}}>
        <Header title="Food Fighter" items={items}/>
        {/*<Content />*/}
        <Form body={children}/>
      </div>
    );
  };
}

export default App;
