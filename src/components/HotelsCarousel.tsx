import '../styles/components/HotelsCarousel.scss';
import { ButtonRedirect } from './share/ButtonRedirect';
import { HotelCard } from './share/HotelCard';
import { HotelModel } from '../types/HotelModel';
import { Loader } from './share/Loader';
import { useEffect, useState } from 'react';
import { useHotelsContext } from '../context/HotelsProvider';
import OwlCarousel from 'react-owl-carousel';

export const HotelsCarousel = () => {
    const [bestHotels, setBestHotels] = useState<HotelModel[]>([]);
    const { hotels } = useHotelsContext();
    const optionCarousel = {
        items: 3,
        margin: 15,
        loop: hotels!.length > 3 ? true : false,
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
        if (hotels!.length > 0) getBestHotels();
    }, [hotels]);

    const getBestHotels = () => {
        const bestHotels = hotels!.filter((hotel) => hotel.rates.score >= 4.5);
        setBestHotels(bestHotels);
    };
    return (
        <div className='best-hotels my-4' id='hoteles'>
            <h2>Descubre los mejores hoteles</h2>
            {bestHotels.length === 0 ? (
                <Loader />
            ) : (
                <>
                    <OwlCarousel className='owl-theme' {...optionCarousel}>
                        {bestHotels.map((hotel) => {
                            return (
                                <div className='item' key={hotel.id}>
                                    <HotelCard data={hotel} />
                                </div>
                            );
                        })}
                    </OwlCarousel>
                    <div className='d-flex justify-content-center'>
                        <ButtonRedirect text='Ver Mas Hoteles' url='/hotels/search' />
                    </div>
                </>
            )}
        </div>
    );
};
