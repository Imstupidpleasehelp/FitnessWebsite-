import React from 'react'
import  { NavLink } from 'react-router-dom'

const Navbar = () => (
    <div>
      
      <nav className="navbar">
        
  <NavLink to="/" > <p className="homebuttontext">Home</p></NavLink>
  <NavLink to="/Services" className=" navbarlabel">Services and Products</NavLink>
  <NavLink to="/Blog" className=" navbarlabel">Blog</NavLink>
  <NavLink to="/Contact" className="navbarlabel">Contact</NavLink>
    </nav>
</div>
)

export default Navbar