import { Habitacion } from "../../types/HotelModel";
import "../../styles/components/share/HotelRoomCard.scss";

interface HotelRoomCardProps {
  habitacion: Habitacion;
}

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
          alt={`Imagen habitacion ${habitacion.tipo}`}
        />
      </div>
      <div className="room-content">
        <div className="type-room">
          <span className="room-desc">{habitacion.descripcion}</span>
          <span className="room-type">{habitacion.tipo}</span>
        </div>
        <span className="room-available">
          {habitacion.disponibilidad ? "Disponible" : "No disponible"}
        </span>
        <div className="room-price">
          <span className="room-base-cost mb-1">
            {formatCosto(habitacion.costoBase)}
          </span>
          <span className="room-tax">
            {formatCosto(habitacion.costoBase * habitacion.impuestos)} Impuestos
            y cargos
          </span>
          <span className="total mb-3">
            {formatCosto(
              habitacion.costoBase * habitacion.impuestos + habitacion.costoBase
            )}{" "}
            en total
          </span>
        </div>
        <button className="btn btn-secondary">Reservar</button>
      </div>
    </div>
  );
};
