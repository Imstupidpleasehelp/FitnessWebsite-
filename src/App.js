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
     propdata: {}
    };

  }


  
  

  componentDidMount(){
    fetch('/addnewitems.json')
        .then(res => res.text())          
        .then(text => console.log(text))
     
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
    <Route exact path="/" component={Home} />
    <Route path='/Services'
  render={(props) => <Services {...props} propdata={this.state.propdata} />}
/>
<Route path="/blog" component={Blog} />
<Route path="/contact" component={Contact} />
    </div>
  </div>
  </BrowserRouter>
  );
}
}
export default App;
