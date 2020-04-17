import React, { Component } from 'react'
import './App.css';
import Home from './components/home'
import Contact from './components/contact'
import Blog from './components/blog'
import Services from './components/services'
import Navbar from  './components/navbar'
import Header from './components/header'
import Cart from  './components/Cart'
import {  Route, BrowserRouter } from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.updateCart = this.updateCart.bind(this);
    this.state = {
     propdata: null,
    cartAmount: 0,
    cart : null
    }
  
    }
    updateCart (){
      this.setState(prevState => ({
         cartAmount: prevState.cartAmount + 1
      }));
    }
    addToCart(e) {
      console.log(e.target);
      
    }
  
    

  componentDidMount() {
    fetch("/addnewitems.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          ...this,
          propdata: res
        });
      });
      
      
  }
    

render (
  
) 

{

  return (
   <BrowserRouter>
    <div className="App">
  <div className="fixedview"> 
    <Header />
    <Navbar cartAmount={this.state.cartAmount} />
    
  </div>
    <div className="viewthatchanges" >
    <Route exact path='/'
  render={(props) => <Home {...props} propdata={this.state.propdata} />}
/>

    <Route path='/Services'
  render={(props) => <Services {...props} propdata={this.state.propdata} cart={this.state.cart} cartAmount={this.state.cartAmount} updateCart={this.updateCart} addToCart={this.addToCart} 
          />}
/>
<Route path='/Blog'
  render={(props) => <Blog {...props} propdata={this.state.propdata} />}
/>
<Route path="/contact" component={Contact} />
<Route path='/Cart'
  render={(props) => <Cart {...props} propdata={this.state.propdata} cart={this.state.cart} cartAmount={this.state.cartAmount}/>}
/>
    </div>
  </div>
  </BrowserRouter>
  );
}
}
export default App;
