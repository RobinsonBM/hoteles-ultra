import '../styles/routes/HotelsView.scss';
import { BannerHeader } from '../components/share/BannerHeader';
import { CardFilter } from '../components/share/CardFilter';
import { HotelCard } from '../components/share/HotelCard';
import { Loader } from '../components/share/Loader';
import { ServicesHotel } from '../components/ServicesHotel';
import { useHotelsContext } from '../context/HotelsProvider';
import imageBanner from '../assets/bay-beach-hotel-swimming-pool-resort-lagoon-185213-wallhere.com.webp';

export const HotelsView = () => {
    const { hotels } = useHotelsContext();
    return (
        <>
            <BannerHeader img={imageBanner} />
            <div className='container'>
                <CardFilter />
            </div>
            <ServicesHotel />
            {hotels?.length === 0 ? (
                <Loader />
            ) : (
                <div className='container'>
                    <h4>¿Estás buscando el lugar ideal para tu estadía?</h4>
                    <div className='hotels'>
                        {hotels?.map((hotel) => {
                            return (
                                <div className='my-3'>
                                    <HotelCard data={hotel} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};
