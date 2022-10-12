import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-3">
                                <h4>JVA</h4>

                                <p className="justify-content-left">Con más de 10 años de trayectoria laboral</p>
                            </div>

                            <div className="col-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <NavLink to="/" className="nav-link p-0 text-white">
                                            Home
                                        </NavLink>
                                    </li>

                                    <li className="nav-items mb-2">
                                        <NavLink to="/about" className="nav-link p-0 text-white">
                                            Acerca de nosotros
                                        </NavLink >
                                    </li>
                                    <li className="nav-items mb-2">
                                        <NavLink to="/service" className="nav-link p-0 text-white">
                                            Servicios
                                        </NavLink>
                                    </li>
                                    <li className="nav-items mb-2">
                                        <NavLink to="/contact" className="nav-link p-0 text-white">
                                            Contact y citas
                                        </NavLink>
                                    </li>
                                    <li className="nav-items mb-2">
                                        <NavLink to="/trabajos" className="nav-link p-0 text-white">
                                            Trabajos realizados
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-4 offset-1">
                                <form>
                                    <h5>¡Escríbenos si tienes dudas!</h5>
                                    <p>Te responderemos lo más pronto posible</p>
                                    <div className="d-flex w-100 gasp-2 botones-abajo">
                                        <label htmlfor="newsletter1" className="visually-hidden">
                                            Emaill Address
                                        </label>
                                        <input
                                            id="newsletter1"
                                            type="text"
                                            className="form-control"
                                            placeholder="Email Address"
                                        />
                                        <button
                                            className="btn btn-primary rounded-pill px-4 m-1"
                                            type="button"
                                        >
                                            Susbscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between pt-4 mt-4 border-top final-text">
                            <p>2022 company, Inc. All rights reserved.</p>
                            <p><i class="fa fa-envelope-o" aria-hidden="true"></i>email:@mail.com</p>
                            <p><i class="fa fa-phone" aria-hidden="true"></i> phone 350989389 </p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-facebook fa-2x"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-instagram fa-2x"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-twitter fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    );
};

export default Footer;