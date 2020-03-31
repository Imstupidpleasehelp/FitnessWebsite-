import React from 'react'
import  { NavLink } from 'react-router-dom'

const Navbar = () => (
    <div>
      
      <nav className="navbar">
        
  <NavLink to="/" > <img className="logo" alt="logo" src={require('./images/logo.png')} /></NavLink>
  <NavLink to="/Services" className=" navbarlabel">Services and Products</NavLink>
  <NavLink to="/Blog" className=" navbarlabel">Blog</NavLink>
  <NavLink to="/Contact" className="navbarlabel">Contact</NavLink>
    </nav>
</div>
)

export default Navbar