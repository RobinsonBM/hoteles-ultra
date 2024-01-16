import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/components/NavbarMenu.scss';

export const NavbarMenu = () => {
    return (
        <Navbar collapseOnSelect expand='lg'>
            <Container>
                <Navbar.Brand href='/'>
                    <img src='../../public/hotel.svg' alt='Icono Hoteles Ultra' />
                    <h1>Hoteles Ultra</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#hoteles'>Hoteles</Nav.Link>
                        <Nav.Link href='#habitaciones'>Habitaciones</Nav.Link>
                    </Nav>
                    <NavLink to='/admin' className='login'>
                        Iniciar Sesion
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
