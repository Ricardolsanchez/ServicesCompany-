import React, { useState } from 'react';
import "../styles/Trabajos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Trabajos = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);


  const photos = [{
    src: "https://soyarquitectura.mx/wp-content/uploads/2021/09/casas-de-lujo-blogc8.jpg"
  },
  {
    src: "https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/07/28/una-villa-de-calvia-entre-las-10-casas-de-lujo-mas-buscadas-en-idealista-durante-este-verano.jpeg"
  },
  {
    src: "https://d500.epimg.net/cincodias/imagenes/2020/11/06/album/1604701108_978430_1604843604_album_normal.jpg"
  },
  {
    src: "https://miaminmobiliario.com/wp-content/uploads/2020/09/ventajas-desventajas-de-comprar-una-casa-de-lujo.jpg"
  },
  {
    src: "https://st.depositphotos.com/2763588/4023/i/600/depositphotos_40236851-stock-photo-expensive-home-against-a-blue.jpg"
  },
  {
    src: "https://okdiario.com/img/2020/08/13/villa-cullinan-malaga-idealista-620x338.jpg"
  },
  {
    src: "https://www.batiburrillo.net/wp-content/uploads/2019/02/Las-mansiones-ma%CC%81s-extravagantes-del-mundo.jpg"
  },
  {
    src: "https://okdiario.com/img/2020/08/13/villa-cullinan-malaga-idealista-620x338.jpg"
  },
  {
    src: "https://okdiario.com/img/2020/08/13/villa-cullinan-malaga-idealista-620x338.jpg"
  },

  ];


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div className='trabajosContainer'>
      {open && (
        <div className="slider">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="close"
            onClick={() => setOpen(false)}
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="arrow"
            onClick={() => handleMove("l")}
          />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="arrow"
            onClick={() => handleMove("r")}
          />
        </div>
      )}
      <div className="trabajosWrap">
        <h1 className="trabajosTitle">Trabajos Realizados</h1>
        <div className="trabajosDireccion">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>Tibaná</span>
        </div>
        <div className="infoTrabajo">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, excepturi explicabo! Quisquam molestias corrupti obcaecati ut. Ab esse labore ullam aliquam corrupti ea omnis mollitia minima quas asperiores totam tempora eos maxime adipisci molestias saepe, non suscipit
            beatae officiis sed obcaecati quia ad soluta sit! Expedita mollitia nam corrupti distinctio.</p>
        </div>
        <div className="trabajosImages">
          {photos.map((photo, i) => (
            <div className="trabajosImgWrapper" key={i}>
              <img onClick={() => handleOpen(i)} src={photo.src} alt="" className='trabajosImg' />
            </div>
          ))}
        </div>
        <div className="trabajosDetail mb-5 mt-5">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quaerat repudiandae excepturi facilis sed, dolorem rem deserunt dolor, temporibus praesentium adipisci laboriosam! Ex officiis iusto laborum dolorum odit, veritatis architecto corporis illum temporibus quae maiores
            beatae necessitatibus eaque qui, saepe eius ad neque dolor atque animi. Veniam provident possimus et?</p>
        </div>
      </div>
    </div>
  );
};

export default Trabajos;