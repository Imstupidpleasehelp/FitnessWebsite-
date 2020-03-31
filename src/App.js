import React, { Component } from 'react'
import './App.css';
import Home from './components/home'
import Contact from './components/contact'
import Blog from './components/blog'
import Services from './components/services'
import Navbar from  './components/navbar'
import Header from './components/header'

import {  Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     propdata: null
    };
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
    

render () {
  return (
   <BrowserRouter>
    <div className="App">
  <div className="fixedview"> 
   <Header />
    <Navbar />
  </div>
    <div className="viewthatchanges" >
    <Route exact path='/'
  render={(props) => <Home {...props} propdata={this.state.propdata} />}
/>
    <Route path='/Services'
  render={(props) => <Services {...props} propdata={this.state.propdata} />}
/>
<Route path='/Blog'
  render={(props) => <Blog {...props} propdata={this.state.propdata} />}
/>
<Route path="/contact" component={Contact} />
    </div>
  </div>
  </BrowserRouter>
  );
}
}
export default App;
