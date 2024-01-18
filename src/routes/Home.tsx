import { BannerHome } from '../components/BannerHome';
import { HotelsCarousel } from '../components/HotelsCarousel';
import { SearchFilters } from '../components/SearchFilters';
import '../styles/App.scss';

export const Home = () => {
    return (
        <>
            <div className='container pb-5'>
                <SearchFilters />
                <BannerHome />
                <HotelsCarousel />
            </div>
        </>
    );
};
