import React from "react";
import "../styles/Services.css";

const Services = () => {
    return (
        <div>
            <section id="services">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Nuestros Servicios</h3>
                            <h1 className="display-6 text-center mb-4">Nuestros <b>increibles</b> Servicios!</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body   text-center">
                                    <i className="fa fa-cogs fa-4x"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Contrucción de redes internas y externas</h5>
                                    <p class="card-text lead">referente a hidráulica, gas, plomeria.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i class="fa fa-lightbulb-o fa-4x"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Construcción de redes de alcantarillado y sanitaria</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i class="fa fa-paint-brush fa-4x"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Construcción de redes para equipos de bombeo</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i class="fa fa-home fa-4x "></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Impermiabilización de cubiertas</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i class="fa fa-fire fa-4x"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Impermizabilización de Fachadas y materas</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i class="fa fa-tree fa-4x"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Venta de materiales</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;