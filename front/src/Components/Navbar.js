import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark" >
    <div id='nav'>
        <a href="/tutorials" className="navbar-brand">
        Training
        </a>
        <div className="navbar-nav">
        <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
            Tutorials
            </Link>
        </li>
        <li className="nav-item">
            <Link to={"/add"} className="nav-link">
            Add
            </Link>
        </li>
        </div>
    </div>
   
  </nav>
)
}
