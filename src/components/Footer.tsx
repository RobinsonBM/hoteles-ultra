import { Link } from 'react-router-dom';
import '../styles/components/Footer.scss';
import { useHotelsContext } from '../context/HotelsProvider';
import { useEffect, useState } from 'react';

export const Footer = () => {
    const [destinies, setDestinies] = useState<string[]>([]);
    const { hotels } = useHotelsContext();

    useEffect(() => {
        if (hotels!.length > 0) getDestiny();
    }, [hotels]);

    const getDestiny = () => {
        const destiniesSet = new Set(hotels!.map((hotel) => hotel.destiny));
        const destinies = Array.from(destiniesSet).sort();
        setDestinies(destinies);
    };

    return (
        <div className='footer d-flex'>
            <Link className='footer-logotipo my-3' to='/'>
                <img src='../../public/hotel.svg' alt='Logo del hotel' />
                <h1>Hoteles Ultra</h1>
            </Link>
            <div className='footer-menu my-3'>
                <h5>Hoteles segun destino</h5>
                {destinies.map((destiny, index) => {
                    const destinyFormat = encodeURIComponent(destiny) 
                    return (
                        <Link key={index} to={`/hotels/search/${destinyFormat}`}>
                            Hoteles en {destiny}
                        </Link>
                    );
                })}
            </div>
            <div className='footer-copyrights my-3'>
                <Link to='/admin'>Admin</Link>
                <Link to='/contacto'>Contactanos</Link>
                <p>Todos los derechos reservados&reg; | Robinson Betancur Marin</p>
                <p>Desarrollador de Software</p>
            </div>
        </div>
    );
};
