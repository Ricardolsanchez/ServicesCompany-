import React from "react";
import Img01 from "../../assets/images/fix.png";
import "../styles/about.css";

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row about-me">
                        <div className="col-md-6">
                            <img src={Img01} alt="About" className="w-75 mt-5" />
                        </div>

                        <div className="col-md-6 textos">
                            <h3 className="fs-5 mb-0">Acerca de nosotros!</h3>
                            <h1 className="display-6 mb-2">Quienes <b>Somos</b>?</h1>
                            <hr className="w-50" />
                            <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quia sequi eum consectetur eius dolores fugiat molestias molestiae laborum excepturi
                                assumenda quis voluptatem harum placeat, ab sed quo cum quibusdam provident, recusandae facilis temporibus, maxime velit. Nulla aspernatur
                                a totam quidem facere ex, quam placeat facilis! Quo repellendus vero enim provident!</p>
                            <button className="btn btn-outline-dark rounded-pill px-4 py-2">Comenzar</button>
                            <button className="btn btn-outline-dark rounded-pill px-4 py-2 ms-2">Contáctanos</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;