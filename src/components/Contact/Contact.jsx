import React, { useState, useEffect } from "react";
import Img02 from "../../assets/images/contact.png";
import "../styles/Form.css";
import Testi from "../Testimonies/Testi";
import { validateAddress, validateFullName } from "../Validation/Validation";
import { validateEmail } from "../Validation/Validation";
import { validateMessage } from "../Validation/Validation";
import InlineError from "../Validation/InlineError";
import { SendEmail } from "../API";
import { toast } from 'react-toastify';
import Toast from "../Toast.js";
import DateRangePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState();
    const [fullNameError, setFullNameError] = useState();
    const [messageError, setMessageError] = useState();
    const [emailError, setEmailError] = useState();
    const [buttonLoading, setButtonLoading] = useState(false);
    const [send, setSend] = useState();
    const [issue, setIssue] = useState("none");
    const [currentDate, setDate] = useState(new Date().toLocaleDateString('fr-FR'));


    useEffect(() => {
        validateFullName({ fullName, setFullNameError })
        validateEmail({ email, setEmailError })
        validateMessage({ message, setMessageError })
        validateAddress({ address, setAddressError })

        if (send) {
            toast.success(send.msg);
            setDate("")
            setFullName("")
            setEmail("")
            setMessage("")
            setAddress("")
            setIssue("")
            setSend()
        }

    }, [currentDate, fullName, email, message, address, issue, send])

    const submitHandler = (e) => {
        e.preventDefault()
        setButtonLoading(true)
        if (!fullNameError & !emailError & !messageError & !addressError) {
            SendEmail({
                currentDate,
                fullName,
                email,
                message,
                address,
                issue,
                setSend
            }).then(() => {
                setButtonLoading(false)
            });
        }
    };

    console.log(issue)
    console.log(currentDate)

    return (
        <>
            <Toast />
            <div>
                <section id="contact">
                    <div className="container my-5 py-5 full-form">
                        <div className="row mb-5">
                            <div className="col-12">
                                <h3 className="fs-5 text-center mb-0">Agenda una cita de valoración</h3>
                                <h1 className="display-6 text-center mb-4 ">
                                    <b>¡Escríbenos!</b>
                                </h1>
                                <hr className="w-25 mx-auto" />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-6 center-block">
                                <img src={Img02} alt="Contact" className="w-75" />
                                <DateRangePicker
                                    method="POST"
                                    action="/send"
                                    dateFormat='dd/MM/yyyy'
                                    className="form-control"
                                    select={currentDate}
                                    value={currentDate}
                                    onChange={(date) => {
                                        const realDate = new Date(date).toDateString('fr-FR');
                                        setDate(realDate)
                                    }}
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                />
                                <i class="fa fa-calendar" aria-hidden="true"></i>

                                <p>Cita seleccionada para el: - {currentDate} </p>
                            </div>


                            <div className="col-md-6 form-table">
                                <form onSubmit={submitHandler} action="">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">
                                            Nombre
                                        </label>
                                        <input
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            placeholder=""
                                        />

                                        {fullNameError && <InlineError error={fullNameError} />}
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">
                                            Email
                                        </label>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            placeholder="@gmail.com...  "
                                        />
                                        {emailError && <InlineError error={emailError} />}
                                    </div>
                                    <div class="mb-3">
                                        <label for="address" class="form-label">
                                            Dirección de domicilio
                                        </label>
                                        <input
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            type="text"
                                            class="form-control"
                                            id="address"
                                            placeholder="street/Av...  "
                                        />
                                        {addressError && <InlineError error={addressError} />}
                                    </div>

                                    <span className="mt-3">¿Que servicio necesitas? </span>
                                    <div className="rounded-circle mb-4">
                                        <select
                                            required
                                            value={issue}
                                            onChange={(e) => setIssue(e.target.value)}
                                        >Trabajo a Escoger
                                            <option value="none">...</option>
                                            <option value="Construccion de redes internas y externas">Construccion de redes internas y externas</option>
                                            <option value="Construccion de redes de alcantarillado y sanitaria">Construccion de redes de alcantarillado y sanitaria</option>
                                            <option value="Construccion de redes de para equipos de bombeo">Construccion de redes de para equipos de bombeo</option>
                                            <option value="imperamilización de cubiertas">imperamilización de cubiertas</option>
                                            <option value="imperamilización de fachadas y materas">imperamilización de fachadas y materas</option>
                                            <option value="Venta de materiales">Venta de materiales</option>
                                            <option value="otro">otro</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextArea1" class="form-label">
                                            Mensaje ¡Cuéntanos!
                                        </label>
                                        <textarea
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            class="form-control"
                                            id="exampleFormControlTextArea1"
                                            rows="5"
                                            placeholder="¡Añade tu dirección!"
                                        ></textarea>
                                        {messageError && <InlineError error={messageError} />}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={buttonLoading && true}
                                        className="btn btn-outline-dark rounded-pill px-4 botonsote"
                                    >
                                        <i className="fa fa-paper-plane ms-2"></i>
                                        {buttonLoading ? "Loading..." : "SUBMIT"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Testi />
                </section>
            </div>

        </>
    );
};

export default Contact; 