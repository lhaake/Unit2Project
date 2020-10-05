import React from "react"
import './Nav.css';
import { Link } from "react-router-dom"

const Nav = () => {
  
    return (
        <div>
          <nav className="nav-bar">

            <Link to="/">
              <h1>Daily News</h1>
            </Link>

            <Link to="/about">
              <h1>About</h1>
            </Link> 

          </nav>
        </div>
        
    )
}

export default Nav
