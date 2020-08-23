import React, { Component } from 'react';

import './App.css';
import Login from './login/login'
import FetchPost from './home/FetchPostWork'
import SignIn from './login/signin'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      trabajador : 0
    }
  }
  
  _handleResults = (trabajador)=>{
    this.setState({trabajador})
   }
   

   _renderResults(){
    return this.state.trabajador === 0
    ? <Login onResults= {this._handleResults}/> 
    : <FetchPost trabajador = {this.state.trabajador}/>
  }
  
  
  render(){
  return (
    <div className="App">
     {this._renderResults()}
    
    </div>
  );
}
}
export default App;
