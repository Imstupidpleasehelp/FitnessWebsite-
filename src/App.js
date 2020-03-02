import React from 'react';
import './App.css';
import Home from './components/home'
import Meet from './components/meet'
import Header from './components/header'
import Contact from './components/contact'
import Blog from './components/blog'
import Shop from './components/shop'
import Services from './components/services'
import Navbar from  './components/navbar'



function App() {
  return (
    <div className="App">
  <div className="fixedview"> 
    <Header /> 
    <Navbar />
  </div>
    <div className="viewthatchanges">
<Home />
<Meet /> 
<Services /> 
<Blog /> 
<Shop /> 
<Contact /> 
    </div>
    </div>
  );
}

export default App;
