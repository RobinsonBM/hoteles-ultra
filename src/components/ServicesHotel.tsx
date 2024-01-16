import '../styles/components/ServicesHotel.scss';
import { useHotelsContext } from '../context/HotelsProvider';
import OwlCarousel from 'react-owl-carousel';
import { Loader } from './share/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDumbbell,
    faParking,
    faSmile,
    faSwimmingPool,
    faTree,
    faTv,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';

export const ServicesHotel = () => {
    const { services } = useHotelsContext();
    const optionCarousel = {
        items: 5,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,
        responsive: {
            1200: {
                items: 5,
            },
            1100: {
                items: 4,
            },
            1000: {
                items: 3,
            },
            800: {
                items: 2,
            },
            768: {
                items: 1,
            },
            520: {
                items: 5,
            },
            200: {
                items: 4,
            },
        },
    };

    const setIcon = (service: string) => {
        switch (service) {
            case 'Deck/Patio':
                return faTree;
            case 'Estacionamiento':
                return faParking;
            case 'Gimnasio':
                return faDumbbell;
            case 'Piscina':
                return faSwimmingPool;
            case 'TV':
                return faTv;
            case 'Wifi gratuito':
                return faWifi;
            default:
                return faSmile;
        }
    };

    return (
        <div className='services-hotel container'>
            <h3>Servicios de tu hotel favorito</h3>
            {services?.length === 0 ? (
                <Loader />
            ) : (
                <OwlCarousel className='owl-theme' {...optionCarousel}>
                    {services?.map((service) => {
                        const icon = setIcon(service);
                        return (
                            <div className='item'>
                                <div className='icon mb-2'>
                                    <FontAwesomeIcon icon={icon} />
                                </div>
                                <div className={service}>{service}</div>
                            </div>
                        );
                    })}
                </OwlCarousel>
            )}
        </div>
    );
};
