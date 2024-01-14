import { useNavigate } from 'react-router-dom';

interface ButtonRedirectProps {
    text: string;
    url: string;
}

export const ButtonRedirect: React.FC<ButtonRedirectProps> = ({ text, url }) => {
    const navigate = useNavigate();
    const handlerRedirect = () => {
        navigate(url);
    };
    console.log('RobinDev - text:', text);
    return (
        <button className='my-2' onClick={handlerRedirect}>
            {text}
        </button>
    );
};
