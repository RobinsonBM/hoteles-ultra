import { useNavigate } from 'react-router-dom';

interface ButtonSidebarProps {
    text: string;
    url: string;
}

export const ButtonSidebar: React.FC<ButtonSidebarProps> = ({ text, url }) => {
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
