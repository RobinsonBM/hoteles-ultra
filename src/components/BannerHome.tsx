import '../styles/components/BannerHome.scss';
import { BannerCard } from './share/BannerCard';
import { faCalendar, faMoon, faTag } from '@fortawesome/free-solid-svg-icons';

export const BannerHome = () => {
    return (
        <div className='banner-home mt-4'>
            <div className='banner-opacity'></div>
            <div className='banner-title'>
                <h2>Busca y reserva tu lugar favorito</h2>
            </div>
            <div className='cards'>
                <BannerCard
                    icon={faMoon}
                    content={'Acumula recompensas por cada noche de estancia'}
                />
                <BannerCard
                    icon={faTag}
                    content={'Ahorra más con los Precios mas bajos del mercado'}
                />
                <BannerCard
                    icon={faCalendar}
                    content={'Opciones de cancelación gratuita si cambias de planes'}
                />
            </div>
        </div>
    );
};
