import React from "react";
import logo from "../images/gpl_logo.png";


export default function Header(){
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} alt="gpl logo" height={'50px'}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Fantasy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Points</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Transfers
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Leagues & Cups</a></li>
                  <li><a className="dropdown-item" href="#">Fixtures</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Stats</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Podcast</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
        )
}