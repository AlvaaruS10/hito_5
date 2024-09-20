
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
   const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex align-items-center">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
              {token ? (
                <>
                  <a className="nav-link" href="#">🔓 Profile</a>
                  <a className="nav-link" href="#">🔒 Logout</a>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/login">🔐 Login</Link>
                  <Link className="nav-link" to="/register">🔐 Register</Link>
                  <Link className="nav-link" to="/profile">Profile</Link>
                  <Link className="nav-link" to="/pizza">Pizza</Link>
                  <Link className="nav-link" to="/NotFound">Ofertas</Link>
                 </>
              )}
            </div>
          </div>
        </div>
        <div className="navbar-nav">
        <Link className="nav-link" to="/Cart">🛒 Total: $25.000</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
