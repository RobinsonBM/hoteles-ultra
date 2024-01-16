import '../../styles/components/share/CardFilter.scss';
import { Filters } from './Filters';

export const CardFilter = () => {
    return (
        <div className='card-filter'>
            <h3>¿Buscas un Hotel?</h3>
            <Filters label={'Fecha de Entrada'} name={'startDate'} type={'date'} />
            <Filters label={'Fecha de Salida'} name={'endDate'} type={'date'} />
            <Filters
                label={'Ciudad de Destino'}
                name={'destino'}
                placeholder={'Destino'}
                type={'text'}
            />
            <Filters
                label={'Cantidad de personas'}
                name={'huespedes'}
                placeholder={'Huespedes'}
                type={'range'}
                min={0}
                max={10}
            />
            <button className='btn btn-secondary mt-3'>Buscar</button>
        </div>
    );
};
