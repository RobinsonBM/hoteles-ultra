/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "../../styles/components/share/CardFilter.scss";
import { Filters } from "./Filters";
import { FiltersModel } from "../../types";
import { useNavigate } from "react-router-dom";

export const CardFilter = () => {
  const [filters, setFilters] = useState<FiltersModel>({
    startDate: "",
    endDate: "",
    destiny: "",
    guests: 1,
  });
  const navigate = useNavigate();

  const handleNumber = ({ target }: any) => {
    const { value, name } = target;
    setFilters({ ...filters, [name]: value });
  };

  const handleValue = ({ target }: any) => {
    const { value, name } = target;
    setFilters({ ...filters, [name]: value });
  };

  const searchHotel = (event: any) => {
    console.log('Entro');
    
    event.preventDefault();
    navigate(`/hotels/search/${filters.destiny}/${filters.startDate}/${filters.endDate}` );
  };

  return (
    <div className="card-filter">
      <h3>¿Buscas un Hotel?</h3>
      <form onSubmit={searchHotel}>
        <Filters
          handleNumber={handleNumber}
          handleValue={handleValue}
          filters={filters}
          label={"Fecha de Entrada"}
          name={"startDate"}
          type={"date"}
        />
        <Filters
          handleNumber={handleNumber}
          handleValue={handleValue}
          filters={filters}
          label={"Fecha de Salida"}
          name={"endDate"}
          type={"date"}
        />
        <Filters
          handleNumber={handleNumber}
          handleValue={handleValue}
          filters={filters}
          label={"Ciudad de Destino"}
          name={"destiny"}
          placeholder={"Destino"}
          type={"text"}
        />
        <Filters
          handleNumber={handleNumber}
          handleValue={handleValue}
          filters={filters}
          label={"Cantidad de personas"}
          name={"guests"}
          placeholder={"Huespedes"}
          type={"range"}
          min={1}
          max={10}
        />
        <button className="btn btn-secondary mt-3" type="submit">Buscar</button>
      </form>
    </div>
  );
};
