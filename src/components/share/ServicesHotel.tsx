import '../../styles/components/ServicesHotel.scss';
import OwlCarousel from 'react-owl-carousel';
import { Loader } from './Loader';
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
import { ServicesHotelProps } from '../../types';

export const ServicesHotel: React.FC<ServicesHotelProps> = ({services, options, titulo}) => {

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
            <h3>{titulo}</h3>
            {services?.length === 0 ? (
                <Loader />
            ) : (
                <OwlCarousel className='owl-theme' {...options}>
                    {services?.map((service, index) => {
                        const icon = setIcon(service);
                        return (
                            <div className='item' key={index}>
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
