import React, { Component } from 'react'
import './App.css';
import Home from './components/home'
import Contact from './components/contact'
import Blog from './components/blog'
import Services from './components/services'
import Navbar from  './components/navbar'
import Header from './components/header'
import $ from 'jquery';
import { Switch, Route, Router, Redirect, BrowserRouter } from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
     serviceitems: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/addnewitems.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({serviceitems: data}); console.log('first page is ok')
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
    <div className="viewthatchanges" >
    <Route exact path="/" component={Home} />
    <Route path='/Services'
  render={(props) => <Services {...props} serviceitems={this.state.data} />}
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
