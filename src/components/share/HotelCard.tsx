import { Carousel, CarouselProps } from 'react-bootstrap';
import '../../styles/components/share/HotelsCardCarousel.scss';
import { HotelModel } from '../../types/HotelModel';
import { useEffect, useState } from 'react';

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
            const images = data.habitaciones.map((habitacion) => habitacion.img);
            setImages(images);
        }
    }, [data]);

    return (
        <div className='hotel-card'>
            <Carousel {...optionCarousel}>
                {images.map((imagen) => {
                    return (
                        <Carousel.Item>
                            <img className='item' src={imagen} alt='' />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
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
        </div>
    );
};
