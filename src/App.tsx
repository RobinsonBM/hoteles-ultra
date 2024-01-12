import { BannerHome } from './components/BannerHome';
import { NavbarMenu } from './components/NavbarMenu';
import { SearchFilters } from './components/SearchFilters';
import './styles/App.scss';

function App() {
    return (
        <>
            <NavbarMenu />
            <div className='container'>
                <SearchFilters />
                <div className='search-home'>
                    <button className='btn btn-secondary mt-3'>Buscar</button>
                </div>
                <BannerHome />
            </div>
        </>
    );
}

export default App;
