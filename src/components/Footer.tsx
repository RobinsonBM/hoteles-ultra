import { Link } from 'react-router-dom';
import '../styles/components/Footer.scss';

export const Footer = () => {
    return (
        <div className='footer d-flex'>
            <Link className='footer-logotipo my-3' to='/'>
                <img src='../../public/hotel.svg' alt='Logo del hotel' />
                <h1>Hoteles Ultra</h1>
            </Link>
            <div className='footer-menu my-3'>
                <Link to='/hoteles'>Hoteles</Link>
                <Link to='/admin'>Admin</Link>
                <Link to='/contacto'>Contactanos</Link>
            </div>
            <div className='footer-copyrights my-3'>
                <p>Todos los derechos reservados&reg; | Robinson Betancur Marin</p>
                <p>Desarrollador de Software</p>
            </div>
        </div>
    );
};
