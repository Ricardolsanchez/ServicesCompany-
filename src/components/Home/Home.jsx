import React from 'react';
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import { NavLink } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5 home__section">
                            <h1 className="display-4 fw-bolder mb-4 mt-3 text-center text-white">¡Escoje el servicio que quieras directo a tu casa!</h1>
                            <p className='lead text-center fs-4 mb-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                                placeat totam numquam iusto magni itaque adipisci dolorem et sequi.
                                Eius quis corporis eum repellat nobis vitae ad dicta debitis asperiores.</p>
                            <div className="buttons d-flex justify-content-center buttons-home">
                                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Contacta</NavLink>
                                <NavLink to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">Quiero Ver Más</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <About />
            <Services />
            <Contact />
        </div>
    );
}

export default Home;