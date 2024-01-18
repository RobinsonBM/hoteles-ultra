import "../styles/routes/HotelView.scss";
import { HotelComment } from "../components/share/HotelComment";
import { HotelContent } from "../components/HotelContent";
import { HotelModel } from "../types/HotelModel";
import { HotelRoomCard } from "../components/share/HotelRoomCard";
import { Loader } from "../components";
import { useEffect, useState } from "react";
import { useHotelsContext } from "../context/HotelsProvider";
import { useParams } from "react-router-dom";

export const HotelView = () => {
  const { id } = useParams();
  const { getHotel } = useHotelsContext();
  const [hotel, setHotel] = useState<HotelModel>();

  useEffect(() => {
    hotelData();
  }, []);

  const hotelData = async () => {
    const hotel = await getHotel!(id!);
    setHotel(hotel);
  };

  return (
    <div className="hotel-view">
      {!hotel ? (
        <Loader />
      ) : (
        <div className="container my-4">
          <HotelContent hotel={hotel} />
          <h2>Elige tu Habitacion</h2>
          <div className="hotel-room mb-4">
            {hotel.habitaciones.map((habitacion, index) => {
              return (
                <div key={index}>
                  <HotelRoomCard habitacion={habitacion} />
                </div>
              );
            })}
          </div>
          <h4 id="hotel-comment">Comentarios</h4>
          <div className="comments">
            {hotel.calificaciones.comentarios.map((comment, index) => {
              return (
                <div key={index}>
                  <HotelComment comment={comment} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
