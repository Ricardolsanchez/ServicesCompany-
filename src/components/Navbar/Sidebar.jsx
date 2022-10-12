import React from 'react'
import '../styles/Sidebarr.css';
import { NavLink, Link } from 'react-router-dom';

const Sidebar = ({ setShowModal }) => {
  return (
    <div>
      <div className="modal_wrapper">
        <div className="single_modal">
          <div className="close_logo">
            <i class="fa fa-times" onClick={() => setShowModal(false)} aria-hidden="true"></i>
          </div>
          <div className="link_menu">
            <div className="ul">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto justify-content-center text-center">
                <li className="nav-item">
                  <a><NavLink className="nav-link active" onClick={() => setShowModal(false)} aria-current="page" to="/">Home</NavLink></a>
                </li>
                <li className="nav-item">
                  <a><Link className="nav-link" onClick={() => setShowModal(false)} to="/about">Acerca de Nosotros</Link></a>
                </li>
                <li className="nav-item">
                  <a> <NavLink className="nav-link" onClick={() => setShowModal(false)} to="/service">Sevicios</NavLink></a>
                </li>
                <li className="nav-item">
                  <a> <NavLink className="nav-link" onClick={() => setShowModal(false)} to="/contact">Contacto y Citas</NavLink></a>
                </li>
                <li className="nav-item">
                  <a><NavLink className="nav-link" onClick={() => setShowModal(false)} to="/trabajos">Trabajos realizados</NavLink></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar