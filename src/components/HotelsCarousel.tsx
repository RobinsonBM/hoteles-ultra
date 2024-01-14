import { ButtonRedirect } from './share/ButtonRedirect';
import { HotelCard } from './share/HotelCard';
import { HotelModel } from '../types/HotelModel';
import { Loader } from './share/Loader';
import { useEffect, useState } from 'react';
import OwlCarousel, { OwlCarouselProps } from 'react-owl-carousel';
import '../styles/components/HotelsCarousel.scss';

export const HotelsCarousel = () => {
    const [hotels, setHotels] = useState<HotelModel[]>([]);
    const optionCarousel: OwlCarouselProps = {
        items: 3,
        margin: 15,
        loop: hotels.length > 3 ? true : false,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,
        responsive: {
            1100: {
                items: 3,
            },
            724: {
                items: 2,
            },
            500: {
                items: 1,
            },
        },
    };

    useEffect(() => {
        fetch('/api/hotels')
            .then((response) => response.json())
            .then(({ hotels }) => {
                const bestHotels = hotels.filter(
                    (hotel: HotelModel) => hotel.calificaciones.puntuacion >= 4.5
                );
                console.log('RobinDev - bestHotels:', bestHotels);
                setHotels(bestHotels);
            });
    }, []);

    return (
        <div className='best-hotels my-4'>
            <h2>Descubre los mejores hoteles</h2>
            {hotels.length === 0 ? (
                <Loader />
            ) : (
                <>
                    <OwlCarousel className='owl-theme' {...optionCarousel}>
                        {hotels.map((hotel) => {
                            return (
                                <div className='item' key={hotel.id}>
                                    <HotelCard data={hotel} />
                                </div>
                            );
                        })}
                    </OwlCarousel>
                    <div className='d-flex justify-content-center'>
                        <ButtonRedirect text='Ver Mas Hoteles' url='/hoteles' />
                    </div>
                </>
            )}
        </div>
    );
};
