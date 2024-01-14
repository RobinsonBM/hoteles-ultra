import { ButtonRedirect } from './share/ButtonRedirect';

export const Sidebar = () => {
    return (
        <>
            <div className='w-100 d-flex flex-column align-items-center'>
                <h2>Hoteles Ultra</h2>
                <ButtonRedirect text='Gestionar Hoteles' url='/' />
                <ButtonRedirect text='Habitaciones disponibles' url='/' />
                <ButtonRedirect text='Precios habitacion' url='/' />
                <ButtonRedirect text='Gestionar Hoteles' url='/' />
            </div>
            <div className='w-100'>
                <ButtonRedirect text='Salir' url='/' />
            </div>
        </>
    );
};
