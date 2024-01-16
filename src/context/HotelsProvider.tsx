import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { HotelModel } from '../types/HotelModel';

interface HotelsProviderProps {
    children: ReactNode;
}

interface HotelsContextProps {
    hotels?: HotelModel[];
}

const HotelsContext = createContext<HotelsContextProps>({});
export const useHotelsContext = () => useContext(HotelsContext);

export const HotelsProvider: React.FC<HotelsProviderProps> = ({ children }) => {
    const [hotels, setHotels] = useState<HotelModel[]>([]);

    useEffect(() => {
        getHotels();
    }, []);

    const getHotels = () => {
        fetch('/api/hotels')
            .then((response) => response.json())
            .then(({ hotels }) => {
                setHotels(hotels);
            });
    };

    return (
        <HotelsContext.Provider
            value={{
                hotels,
            }}>
            {children}
        </HotelsContext.Provider>
    );
};
