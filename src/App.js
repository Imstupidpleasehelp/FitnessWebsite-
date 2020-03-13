import React, { Component } from 'react'
import './App.css';
import Home from './components/home'
import Contact from './components/contact'
import Blog from './components/blog'
import Services from './components/services'
import Navbar from  './components/navbar'
import Header from './components/header'
import { Switch, Route, Router, Redirect, BrowserRouter } from 'react-router-dom';
import $ from 'jquery';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ServiceItems: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/ServiceItems.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({ServiceItems: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

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
    <div className="viewthatchanges">
<Route exact path="/" component={Home} />
<Route path="/services" component={Services} data={this.state.resumeData.ServiceItem} />
<Route path="/blog" component={Blog} />
<Route path="/contact" component={Contact} />

    </div>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
