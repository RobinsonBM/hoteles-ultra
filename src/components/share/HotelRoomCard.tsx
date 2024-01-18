import "../../styles/components/share/HotelRoomCard.scss";
import { HotelRoomCardProps } from "../../types";

const formatCosto = (valor: number) => {
  const newFormat = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(valor);
  return newFormat;
};

export const HotelRoomCard: React.FC<HotelRoomCardProps> = ({ habitacion }) => {
  return (
    <div className="hotel-room-card m-2">
      <div className="room-img">
        <img
          src={habitacion.img}
          alt={`Imagen habitacion ${habitacion.type}`}
        />
      </div>
      <div className="room-content">
        <div className="type-room">
          <span className="room-desc">{habitacion.description}</span>
          <span className="room-type">{habitacion.type}</span>
        </div>
        <span className="room-available">
          {habitacion.available ? "Disponible" : "No disponible"}
        </span>
        <div className="room-price">
          <span className="room-base-cost mb-1">
            {formatCosto(habitacion.roomBaseCost)}
          </span>
          <span className="room-tax">
            {formatCosto(habitacion.roomBaseCost * habitacion.tax)} Impuestos
            y cargos
          </span>
          <span className="total mb-3">
            {formatCosto(
              habitacion.roomBaseCost * habitacion.tax + habitacion.roomBaseCost
            )}{" "}
            en total
          </span>
        </div>
        <button className="btn btn-secondary">Reservar</button>
      </div>
    </div>
  );
};
