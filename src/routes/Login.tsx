import '../styles/routes/Login.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
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
        //         // Puedes manejar la respuesta según tus necesidades
        //     })
        //     .catch((error) => console.error('Error al crear usuario:', error));
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate('/dashboard');
    };
    return (
        <div className='login'>
            <div className='login-img'>
                <div className='login-opacity'></div>
            </div>
            <div className='login-form p-5'>
                <form onSubmit={handleSubmit}>
                    <h1>Hoteles Ultra</h1>
                    <p>
                        El sitio web de Hoteles Ultra: Lujo y eficiencia. Reservas y gestión
                        simplificadas para ofrecer experiencias exclusivas.
                    </p>
                    <div className='w-50 d-flex flex-column align-items-start'>
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

                    <div className='w-50 d-flex flex-column align-items-start'>
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
        </div>
        // <div className='contain d-flex align-items-center justify-content-center'>
        // </div>
    );
};
