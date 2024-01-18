import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { ButtonRedirectProps } from '../../types';


export const ButtonRedirect: React.FC<ButtonRedirectProps> = ({ text, url, icon }) => {
    const navigate = useNavigate();
    const handlerRedirect = () => {
        navigate(url);
    };
    return (
        <button
            className={icon ? 'px-2 btn my-2 text-start' : 'btn my-2'}
            onClick={handlerRedirect}>
            {icon ? <FontAwesomeIcon className='me-3' icon={icon} /> : null}
            {text}
        </button>
    );
};
