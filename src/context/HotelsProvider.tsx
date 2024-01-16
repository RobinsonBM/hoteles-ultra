import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { HotelModel } from '../types/HotelModel';

interface HotelsProviderProps {
    children: ReactNode;
}

interface HotelsContextProps {
    hotels?: HotelModel[];
    services?: string[];
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
        fetch('/api/hotels')
            .then((response) => response.json())
            .then(({ hotels }) => {
                setHotels(hotels);
                getServices(hotels);
            });
    };

    const getServices = (hotels: HotelModel[]) => {
        console.log('RobinDev - hotels:', hotels);
        const servicesSet = new Set(hotels.flatMap((hotel) => hotel.servicios));
        const services = Array.from(servicesSet).sort();
        setServices(services);
    };

    return (
        <HotelsContext.Provider
            value={{
                hotels,
                services,
            }}>
            {children}
        </HotelsContext.Provider>
    );
};
