import React from "react"
import './Nav.css';
import { Link } from "react-router-dom"


const Nav = () => {
  
  let textDecoration = "none";
  const date = new Date().toDateString().slice(0, 10);
  
    return (
        <div>
          <nav className="nav-bar">

            <Link to="/" style={{textDecoration}}>
              <h1 className="site-title">Daily News</h1>
            <h3 className="date">{date}</h3>
              
            </Link>

            <Link to="/about" style={{ textDecoration }}>
              <h3 className="about">About</h3>
            </Link> 

          </nav>
        </div>
        
    )
}

export default Nav
