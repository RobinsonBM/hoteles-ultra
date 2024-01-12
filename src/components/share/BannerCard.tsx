import '../../styles/components/share/BannerCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface BannerCardProps {
    icon: IconDefinition;
    content: string;
}

export const BannerCard: React.FC<BannerCardProps> = ({ icon, content }) => {
    return (
        <div className='banner-card'>
            <FontAwesomeIcon icon={icon} />
            <div className='card-content'>{content}</div>
        </div>
    );
};
