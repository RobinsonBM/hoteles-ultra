import "../styles/components/HotelContent.scss";
import { HotelContentProps } from "../types";
import { ServicesHotel } from "./share/ServicesHotel";
import ReactStars from "react-rating-star-with-type";


export const HotelContent: React.FC<HotelContentProps> = ({ hotel }) => {
  const optionCarousel = {
    items: hotel.servicios.length,
    margin: 10,
    loop: false,
    autoplay: false,
    dots: false,
  };

  const ratingStatus = (rate: number) => {
    if (rate > 4.5) {
      return "Muy bueno";
    } else if (rate > 4) {
      return "Bueno";
    } else if (rate > 2) {
      return "Regular";
    } else {
      return "Malo";
    }
  };

  return (
    <div className="hotel-content">
      <div className="main-content">
        <div className="title d-flex">
          <h2 className="m-0">{hotel.nombre}</h2>
          <p className="m-0 ms-2">Hotel en {hotel.ubicacion}</p>
        </div>
        <span className="address">{hotel.direccion}</span>
        <div className="rate d-flex">
          <ReactStars value={hotel.calificaciones.puntuacion} />
          <span className="rate-number">{hotel.calificaciones.puntuacion}</span>
          <span className="rate-context">
            {ratingStatus(hotel.calificaciones.puntuacion)}
          </span>
        </div>
        <a href="#hotel-comment">
          ver los {hotel.calificaciones.comentarios.length} comentarios
        </a>
        <ServicesHotel
          services={hotel.servicios}
          titulo="Servicios principales"
          options={optionCarousel}
        />
      </div>
      <div className="hotel-img">
        {hotel.imagenes.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
