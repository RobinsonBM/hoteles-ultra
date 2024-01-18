/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "react-bootstrap";
import { Filters } from "./share/Filters";
import { FiltersModel } from "../types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchFilters = () => {
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
    event.preventDefault();
    navigate(`/hotels/search/${filters.destiny}/${filters.startDate}/${filters.endDate}` );
  };

  return (
    <>
      <h2 className="mt-4 text-center">¿Buscas un Hotel?</h2>
      <form onSubmit={searchHotel}>
        <Row>
          <Col md={3} sm={6}>
            <Filters
              label={"Fecha de Entrada"}
              name={"startDate"}
              type={"date"}
              handleNumber={handleNumber}
              handleValue={handleValue}
              filters={filters}
            />
          </Col>
          <Col md={3} sm={6}>
            <Filters
              label={"Fecha de Salida"}
              name={"endDate"}
              type={"date"}
              handleNumber={handleNumber}
              handleValue={handleValue}
              filters={filters}
            />
          </Col>
          <Col md={3} sm={6}>
            <Filters
              label={"Ciudad de Destino"}
              name={"destiny"}
              placeholder={"Destino"}
              type={"text"}
              handleNumber={handleNumber}
              handleValue={handleValue}
              filters={filters}
            />
          </Col>
          <Col md={3} sm={6}>
            <Filters
              label={"Cantidad de personas"}
              name={"guests"}
              placeholder={"Huespedes"}
              type={"range"}
              min={1}
              max={10}
              handleNumber={handleNumber}
              handleValue={handleValue}
              filters={filters}
            />
          </Col>
        </Row>
        <div className="search-home">
          <button className="btn btn-secondary mt-3" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </>
  );
};
