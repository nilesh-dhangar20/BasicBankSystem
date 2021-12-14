import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg  navbar-white  bg-dark d-block">
        <div className="container-fluid">

          <NavLink className="navbar-brand" to="/">SparkFoundation</NavLink>
          <button className="navbar-toggler text-white navbar-toggler-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/customers">customer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/transactions">transactions</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
