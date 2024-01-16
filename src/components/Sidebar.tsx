import { faBed, faDollar, faDoorOpen, faHotel } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Sidebar.scss';
import { ButtonRedirect } from './share/ButtonRedirect';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <>
            <div className='sidebar-menu w-100 d-flex flex-column align-items-center'>
                <Link to='/dashboard'>
                    <h2>Hoteles Ultra</h2>
                </Link>
                <ButtonRedirect text='Gestionar Hoteles' url='/dashboard/hoteles' icon={faHotel} />
                <ButtonRedirect text='Habitaciones disponibles' url='/' icon={faBed} />
                <ButtonRedirect text='Precios habitacion' url='/' icon={faDollar} />
            </div>
            <div className='w-100'>
                <ButtonRedirect text='Salir' url='/' icon={faDoorOpen} />
            </div>
        </>
    );
};
