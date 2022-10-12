import React from 'react';
import Slider from 'react-slick';
import ava01 from "../../assets/images/ava-01.jpg";
import ava02 from "../../assets/images/ava-02.jpg";
import ava03 from "../../assets/images/ava-03.jpg";
import "../styles/Slider.css";

const Testi = () => {
    const settings = {
        dots: true,
        autoplay: true,
        inifinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="sliderContainer">
            <Slider {...settings}>
                <div className='textwrapper__slider'>
                    <p className="review__text">
                        "Muy buena empresa...""
                    </p>
                    <div className='slider__content d-flex align-item-center gap-3'>
                        <img src={ava01} alt="avatar" className='rounded' />
                        <h6>Jhon Doe</h6>
                    </div>
                </div>
                <div>
                    <p className="review__text">
                        "Genial...""
                    </p>
                    <div className='slider__content d-flex align-item-center gap-3'>
                        <img src={ava02} alt="avatar" className='rounded' />
                        <h6>Mitchell Marsh</h6>
                    </div>
                </div>
                <div>
                    <p className="review__text">
                        "Excelente trabajo...""
                    </p>
                    <div className='slider__content d-flex align-item-center gap-3'>
                        <img src={ava03} alt="avatar" className='rounded' />
                        <h6>Steve Crock</h6>
                    </div>
                </div>
            </Slider>
        </div>

    )
}

export default Testi;