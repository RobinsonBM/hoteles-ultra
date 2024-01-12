import { ButtonSidebar } from './share/ButtonSidebar';

export const Sidebar = () => {
    return (
        <>
            <div className='w-100 d-flex flex-column align-items-center'>
                <h2>Hoteles Ultra</h2>
                <ButtonSidebar text='Gestionar Hoteles' url='/' />
                <ButtonSidebar text='Habitaciones disponibles' url='/' />
                <ButtonSidebar text='Precios habitacion' url='/' />
                <ButtonSidebar text='Gestionar Hoteles' url='/' />
            </div>
            <div className='w-100'>
                <ButtonSidebar text='Salir' url='/' />
            </div>
        </>
    );
};
