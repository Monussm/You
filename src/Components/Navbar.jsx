import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return <>
    <nav className="navbar navbar-expand-lg">
  <div className="container mt-5">
    <NavLink to="/" className="navbar-brand"><img className="Logo" src="../Image/Logo.png"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mx-auto">
      <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SERVICES
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to="/college" className="dropdown-item"><i className="fa-solid fa-pencil me-2"></i>College Essay Review</NavLink></li>
            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-note-sticky me-2"></i>College App Review</a></li>
            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-phone me-2"></i>Consultation Call</a></li>
            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-feather me-2"></i>Writing Session</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-star me-2"></i>Testimonials</a></li>
            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-people-group me-2"></i>Team</a></li>
            <li><a className="dropdown-item" href="#"><i className="fa-sharp fa-solid fa-circle-info me-2"></i>About us</a></li>
            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-circle-question me-2"></i>Faq</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TOOLS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-magnifying-glass me-2"></i>Essay Scanner</a></li>
            <li><a className="dropdown-item" href="#"><i className="fa-sharp fa-solid fa-question me-2"></i>Guess My Decision</a></li>
          
          </ul>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link ">BLOG</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link">LOGIN</a>
        </li>
      </ul>
      <NavLink href="#" className="Get-started">GET STARTED</NavLink>
    </div>
  </div>
</nav>

    </>





}
export default Navbar;