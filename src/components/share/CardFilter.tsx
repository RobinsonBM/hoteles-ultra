/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "../../styles/components/share/CardFilter.scss";
import { Filters } from "./Filters";
import { FiltersModel } from "../../types";

export const CardFilter = () => {
  const [filters, setFilters] = useState<FiltersModel>({
    startDate: "",
    endDate: "",
    destiny: "",
    guests: 1,
  });

  const handleNumber = ({ target }: any) => {
    const { value, name } = target;
    setFilters({ ...filters, [name]: value });
  };

  const handleValue = ({ target }: any) => {
    const { value, name } = target;
    setFilters({ ...filters, [name]: value });
  };
  return (
    <div className="card-filter">
      <h3>¿Buscas un Hotel?</h3>
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
        name={"destino"}
        placeholder={"Destino"}
        type={"text"}
      />
      <Filters
        handleNumber={handleNumber}
        handleValue={handleValue}
        filters={filters}
        label={"Cantidad de personas"}
        name={"huespedes"}
        placeholder={"Huespedes"}
        type={"range"}
        min={0}
        max={10}
      />
      <button className="btn btn-secondary mt-3">Buscar</button>
    </div>
  );
};
