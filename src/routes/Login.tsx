import '../styles/routes/Login.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/users')
            .then((response) => response.json())
            .then((data: void) => {
                console.log('RobinDev - data:', data);
            });
        // fetch('/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         name: 'Jhon',
        //         lastName: 'Betancur',
        //         birthDate: '29/09/1998',
        //         gender: 'hombre',
        //         documentType: 'cedula de ciudadania',
        //         documentNumber: '1039876398',
        //         email: 'jhompymarin@gmail.com',
        //         telephone: '3163987690',
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Usuario creado:', data);
        //         // Puedes manejar la respuesta según tus necesidades
        //     })
        //     .catch((error) => console.error('Error al crear usuario:', error));
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate('/dashboard');
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
    };
    return (
        <div className='contain d-flex align-items-center justify-content-center'>
            <form id='container' onSubmit={handleSubmit}>
                <h1>Hoteles Ultra</h1>
                <div className='w-100 d-flex flex-column align-items-start'>
                    <label htmlFor='username' className='mt-3'>
                        Usuario:
                    </label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='Ingresa tu usuario'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className='w-100 d-flex flex-column align-items-start'>
                    <label htmlFor='password' className='mt-3'>
                        Contraseña:
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Ingresa tu contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className='btn btn-secondary mt-3' type='submit'>
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};
