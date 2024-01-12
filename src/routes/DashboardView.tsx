import '../styles/routes/DashboardView.scss';

export const DashboardView = () => {
    return (
        <div className='dashboard'>
            <header>
                <h1>Introducción al Dashboard Administrativo para la Gestión de Hoteles</h1>
                <p>
                    ¡Bienvenido al Dashboard Administrativo de nuestra plataforma de gestión
                    hotelera! Este espacio centralizado y poderoso ha sido diseñado para brindarte
                    un control completo sobre todos los aspectos relacionados con la administración
                    y operación de nuestros hoteles asociados.
                </p>
                <p>
                    En este Dashboard, encontrarás una interfaz intuitiva y eficiente que te
                    permitirá supervisar, analizar y tomar decisiones informadas para optimizar la
                    experiencia de nuestros huéspedes y mejorar la eficiencia operativa.
                </p>
            </header>

            <section className='feature'>
                <h2>Gestión de Hoteles</h2>
                <ul>
                    <li>
                        Accede fácilmente a la información clave de cada hotel asociado, desde
                        detalles generales hasta estadísticas de ocupación.
                    </li>
                    <li>Añade, edita o elimina hoteles según las necesidades de tu cartera.</li>
                </ul>
            </section>

            <section className='feature'>
                <h2>Asignar habitaciones disponibles</h2>
            </section>

            <section className='feature'>
                <h2>Gestionar valores de habitacion</h2>
            </section>

            <section className='feature'>
                <h2>Análisis Financiero</h2>
            </section>

            <section className='feature'>
                <h2>Comentarios y Calificaciones</h2>
            </section>

            <section className='feature'>
                <h2>Configuración y Personalización</h2>
            </section>
        </div>
    );
};
