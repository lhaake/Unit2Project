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
              <h1>Daily News</h1>
              <h3>{date}</h3>
            </Link>

            <Link to="/about" style={{ textDecoration }}>
              <h1 className="about">About</h1>
            </Link> 

          </nav>
        </div>
        
    )
}

export default Nav
