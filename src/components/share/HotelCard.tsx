import '../../styles/components/share/HotelsCard.scss';
import { Carousel, CarouselProps } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HotelCardProps } from '../../types';

export const HotelCard: React.FC<HotelCardProps> = ({ data }) => {
    const [images, setImages] = useState<string[]>([]);
    const optionCarousel: CarouselProps = {
        indicators: false,
        fade: true,
        interval: null,
    };

    useEffect(() => {
        if (DataTransferItemList) {
            const images = data.images.map((imgHotel) => imgHotel);
            setImages(images);
        }
    }, [data]);

    return (
        <div className='hotel-card'>
            <Carousel {...optionCarousel}>
                {images.map((imagen, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img className='item' src={imagen} alt='' />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <Link to={`/hotel/${data.id}`}>
            <div className='hotel-content'>
                <div className='hotel-rate mt-1 d-flex justify-content-between'>
                    <strong>{data.rates.score} de 5</strong>
                    <p>({data.rates.comments.length} Comentarios)</p>
                </div>
                <div className='hotel-name'>
                    <h4>{data.name}</h4>
                    <p>{data.destiny}</p>
                </div>
                <div className='hotel-others'>
                    <p>{data.address}</p>
                    <p>{data.telephone}</p>
                    <p>{data.email}</p>
                    <p>
                        <strong>Servicios: </strong>
                        {data.services.join(', ')}
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
};
