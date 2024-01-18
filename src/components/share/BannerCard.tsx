import '../../styles/components/share/BannerCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BannerCardProps } from '../../types';


export const BannerCard: React.FC<BannerCardProps> = ({ icon, content }) => {
    return (
        <div className='banner-card'>
            <FontAwesomeIcon icon={icon} />
            <div className='card-content'>{content}</div>
        </div>
    );
};
