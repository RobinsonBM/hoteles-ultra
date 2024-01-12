import { Col, Row } from 'react-bootstrap';
import { Filters } from './share/Filters';

export const SearchFilters = () => {
    return (
        <>
            <h2 className='mt-4'>¿A donde vas?</h2>
            <Row>
                <Col md={3} sm={6}>
                    <Filters label={'Fecha de Entrada'} name={'startDate'} type={'date'} />
                </Col>
                <Col md={3} sm={6}>
                    <Filters label={'Fecha de Salida'} name={'endDate'} type={'date'} />
                </Col>
                <Col md={3} sm={6}>
                    <Filters
                        label={'Ciudad de Destino'}
                        name={'destino'}
                        placeholder={'Destino'}
                        type={'text'}
                    />
                </Col>
                <Col md={3} sm={6}>
                    <Filters
                        label={'Cantidad de personas'}
                        name={'huespedes'}
                        placeholder={'Huespedes'}
                        type={'range'}
                        min={0}
                        max={10}
                    />
                </Col>
            </Row>
        </>
    );
};
