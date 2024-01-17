import '../../styles/components/share/HotelsCard.scss';
import { Carousel, CarouselProps } from 'react-bootstrap';
import { HotelModel } from '../../types/HotelModel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HotelCardProps {
    data: HotelModel;
}

export const HotelCard: React.FC<HotelCardProps> = ({ data }) => {
    const [images, setImages] = useState<string[]>([]);
    const optionCarousel: CarouselProps = {
        indicators: false,
        fade: true,
        interval: null,
    };

    useEffect(() => {
        if (DataTransferItemList) {
            const images = data.imagenes.map((imgHotel) => imgHotel);
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
                    <strong>{data.calificaciones.puntuacion} de 5</strong>
                    <p>({data.calificaciones.comentarios.length} Comentarios)</p>
                </div>
                <div className='hotel-name'>
                    <h4>{data.nombre}</h4>
                    <p>{data.ubicacion}</p>
                </div>
                <div className='hotel-others'>
                    <p>{data.direccion}</p>
                    <p>{data.telefono}</p>
                    <p>{data.correoElectronico}</p>
                    <p>
                        <strong>Servicios: </strong>
                        {data.servicios.join(', ')}
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
};
