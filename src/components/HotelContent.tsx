import "../styles/components/HotelContent.scss";
import { HotelContentProps } from "../types";
import { ServicesHotel } from "./share/ServicesHotel";
import ReactStars from "react-rating-star-with-type";


export const HotelContent: React.FC<HotelContentProps> = ({ hotel }) => {
  const optionCarousel = {
    items: hotel.services.length,
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
          <h2 className="m-0">{hotel.name}</h2>
          <p className="m-0 ms-2">Hotel en {hotel.destiny}</p>
        </div>
        <span className="address">{hotel.address}</span>
        <div className="rate d-flex">
          <ReactStars value={hotel.rates.score} />
          <span className="rate-number">{hotel.rates.score}</span>
          <span className="rate-context">
            {ratingStatus(hotel.rates.score)}
          </span>
        </div>
        <a href="#hotel-comment">
          ver los {hotel.rates.comments.length} comentarios
        </a>
        <ServicesHotel
          services={hotel.services}
          titulo="Servicios principales"
          options={optionCarousel}
        />
      </div>
      <div className="hotel-img">
        {hotel.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
