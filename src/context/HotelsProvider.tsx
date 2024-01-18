import { createContext, useContext, useEffect, useState } from "react";
import { HotelModel } from "../types/HotelModel";
import { HotelsProviderProps } from "../types";

interface HotelsContextProps {
  hotels?: HotelModel[];
  hotel?: HotelModel;
  services?: string[];
  getHotel?: (id: string) => Promise<HotelModel>;
  getHotelsByDestiny?: (destiny: string) => Promise<HotelModel[]>;
}

const HotelsContext = createContext<HotelsContextProps>({});
export const useHotelsContext = () => useContext(HotelsContext);

export const HotelsProvider: React.FC<HotelsProviderProps> = ({ children }) => {
  const [hotels, setHotels] = useState<HotelModel[]>([]);
  const [services, setServices] = useState<string[]>([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = () => {
    fetch("/api/hotels")
      .then((response) => response.json())
      .then(({ hotels }) => {
        setHotels(hotels);
        getServices(hotels);
      });
  };

  const getHotelsByDestiny = async (destiny: string) => {
    const data: HotelModel[] = await fetch(`/api/hotels/${destiny}`)
      .then((response) => response.json())
      .then((hotels) => {
        return hotels;
      });
    return data;
  };

  const getServices = (hotels: HotelModel[]) => {
    const servicesSet = new Set(hotels.flatMap((hotel) => hotel.servicios));
    const services = Array.from(servicesSet).sort();
    setServices(services);
  };

  const getHotel = async (id: string) => {
    const data: HotelModel = await fetch(`/api/hotel/${id}`)
      .then((response) => response.json())
      .then(({ hotel }) => {
        return hotel;
      });
    return data;
  };

  return (
    <HotelsContext.Provider
      value={{
        hotels,
        services,
        getHotel,
        getHotelsByDestiny,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
