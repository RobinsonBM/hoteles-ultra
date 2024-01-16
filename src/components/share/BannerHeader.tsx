import '../../styles/components/share/BannerHeader.scss';

interface BannerHeaderProps {
    img: string;
}

export const BannerHeader: React.FC<BannerHeaderProps> = ({ img }) => {
    return (
        <div className='banner-header'>
            <img className='banner-img' src={img} alt='Imagen del Banner' />
            <div className='banner-opacity'></div>
        </div>
    );
};
