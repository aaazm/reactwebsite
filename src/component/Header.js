import React from "react";
import { Container } from "react-bootstrap";
import img1 from "../images/logo.png"
import {NavLink} from 'react-router-dom'
function Header() {
  return(
    <div className="header">
      <Container>
          <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
            <img src={img1} />
          </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item nv_link">
              <NavLink to='/'>Home</NavLink>
            </li>  
            <li className="nav-item nv_link">
              <NavLink to='/menu'>Menu</NavLink>
            </li>  
            <li className="nav-item nv_link">
              <NavLink to='/about'>About</NavLink>
            </li> 
            <li className="nav-item nv_link">
              <NavLink to='/service'>Service</NavLink>
            </li>  
            <li className="nav-item nv_link">
              <NavLink to='/contact'>Contact</NavLink>
            </li>        
          </ul>
        </div>
      </div>
    </nav>
      </Container>
    </div>
  )
}

export default Header;