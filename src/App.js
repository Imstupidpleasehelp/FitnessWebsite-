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


  getResumeData() {
    fetch('./addnewitems.json')
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
    this.setState({propdata: data});
    })
    .catch(function (err) {
      console.log('err');
    });
  }

  /*
   */ 
  
  

  componentDidMount(){
    this.getResumeData();
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
