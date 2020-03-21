import React from 'react'
import  {Link, NavLink } from 'react-router-dom'

const Navbar = () => (
    <div><nav className="navbar navbar-light">
  <Link to="/" className="navbar-brand navbarlabel">Home</Link>
  <NavLink to="/Services" className="navbar-brand navbarlabel">Services and Products</NavLink>
  <NavLink to="/Blog" className="navbar-brand navbarlabel">Blog</NavLink>
  <NavLink to="/Contact" className="navbar-brand navbarlabel">Contact</NavLink>
    </nav>
</div>
)

export default Navbar