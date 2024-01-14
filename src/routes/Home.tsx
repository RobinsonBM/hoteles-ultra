import { Route, Routes } from 'react-router-dom';
import { BannerHome } from '../components/BannerHome';
import { HotelsCarousel } from '../components/HotelsCarousel';
import { SearchFilters } from '../components/SearchFilters';
import '../styles/App.scss';

function Home() {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <div className='container pb-5'>
                            <SearchFilters />
                            <BannerHome />
                            <HotelsCarousel />
                        </div>
                    </>
                }
            />
        </Routes>
    );
}

export default Home;
