import React, { Component } from 'react'

import  { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';


class Navbar extends Component {
  state = { 
    CartAmount: 0
   }
  render() { 
    return ( <div>
      
      <nav className="navbar">
        
  <NavLink to="/" > <p className="homebuttontext">Home</p></NavLink>
  <NavLink to="/Services" className=" navbarlabel">Services and Products</NavLink>
  <NavLink to="/Blog" className=" navbarlabel">Blog</NavLink>
  <NavLink to="/Contact" className="navbarlabel">Contact</NavLink>
  <NavLink to="/Cart" className="navbarlabel"><FaShoppingCart />{this.props.CartAmount}</NavLink>
    </nav>
</div>
 );
  }
}
 
export default Navbar;

