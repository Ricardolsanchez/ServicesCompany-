import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";
import Logo from "../../assets/images/logo.jpg";
import Sidebar from './Sidebar';

function Navbar() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container"> 
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h5>JVA</h5>
          </div>
            <div className="close_button">
              <i class="fa fa-bars" onClick ={() => setShowModal(true)}aria-hidden="true"></i>
            </div>
          <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto justify-content-center text-center">
              <li className="nav-item">
                <a><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></a>
              </li>
              <li className="nav-item">
                <a><NavLink className="nav-link" to="/about">Acerca de Nosotros</NavLink></a>
              </li>
              <li className="nav-item">
                <a> <NavLink className="nav-link" to="/service">Sevicios</NavLink></a>
              </li>
              <li className="nav-item">
                <a> <NavLink className="nav-link" to="/contact">Contacto y Citas</NavLink></a>
              </li>
              <li className="nav-item">
                <a><NavLink className="nav-link" to="/trabajos">Trabajos realizados</NavLink></a>
              </li>
            </ul>
            <a><NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/"></NavLink></a>
          </div>

            {showModal && <Sidebar setShowModal= {setShowModal} />}
        </div>
      </nav>
    </div>
  )
}

export default Navbar