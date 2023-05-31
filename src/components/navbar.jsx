import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import Login from "../routes/login"
import { FaBars, FaTimes } from "react-icons/fa";

const navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="Nav-container">
      <div className='identity'>
        <Link to='/' style={{ textDecoration: "none" }}><h3 style={{ color: "black" }}>Start<span>Up</span></h3></Link>
      </div>

      <Link to="jobs" className='nav-items' style={{ textDecoration: "none", color: "black" }}>Jobs</Link>
      <div>  <Link to="career" className='nav-items' style={{ textDecoration: "none", color: "black" }}>Career tips</Link></div>
      <div >  <Link to="profile" className='nav-items' style={{ textDecoration: "none", color: "black" }}>Profile</Link></div>
      <Link to="./signup" className='nav-items'><button>SignUp</button></Link>

      <nav className="Nav-Links" ref={navRef}>
        <div className="nav-items2">
          <button className='nav_btn nav_close' onClick={showNavbar}>
            <FaTimes />
          </button>
          <Link to="jobs" onClick={showNavbar} style={{ textDecoration: "none", color: "black" }}>Jobs</Link>
          <div>  <Link to="career" onClick={showNavbar} style={{ textDecoration: "none", color: "black" }}>Career tips</Link></div>
          <div >  <Link to="profile" onClick={showNavbar} style={{ textDecoration: "none", color: "black" }}>Profile</Link></div>
          <Link to="./signup" onClick={showNavbar}><button>SignUp</button></Link>
        </div>
      </nav>
      <button className='nav_btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  )
}

export default navbar