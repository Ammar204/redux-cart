import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Menu from "./Menu"
import Cart from "./Cart"
import Header from "./Header"
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={flag:true}
  }
  change = ()=> this.setState({flag : !this.state.flag})
  render(){
    return(
      
       <BrowserRouter>
      <div>
{/*         
        <Link to="/cart">cart</Link>
        <Link to="/home">HOME</Link>
        <Route path="/" component={Menu} />
        <Route path="/cart" component={Cart} /> */}
        <div className="header" onClick={this.change}>{this.state.flag ? "CART" : "CLOSE"}</div>
        <div className="menu-cart-container">
        <Menu/>
        <Cart show={this.state.flag}/>

        </div>
        
      
  
        </div>
      
      </BrowserRouter>
      
      
    )
  }
}