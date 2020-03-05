import React from 'react';
import './App.css';
import Home from './components/home'
import Contact from './components/contact'
import Blog from './components/blog'
import Shop from './components/shop'
import Services from './components/services'
import Navbar from  './components/navbar'
import Header from './components/header'
import { Switch, Route, Router, Redirect, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
  <div className="fixedview"> 
    <Header /> 
    <Navbar />
  </div>
    <div className="viewthatchanges">
<Route path="/home" component={Home} />
<Route path="/services" component={Services} />
<Route path="/blog" component={Blog} />
<Route path="/contact" component={Contact} />
<Route path="/shop"  component={Shop} /> 

    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
