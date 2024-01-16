import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

interface ButtonRedirectProps {
    text: string;
    url: string;
    icon?: IconDefinition;
}

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
