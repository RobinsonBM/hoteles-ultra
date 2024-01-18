import { FiltersProps } from '../../types';


export const Filters: React.FC<FiltersProps> = ({ label, type, name, placeholder, min, max, handleNumber, handleValue, filters }) => {

    return (
        <div>
            <label htmlFor={type}>{label}</label>
            <div className='d-flex  align-items-center'>
                <input
                    className='m-0'
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    required
                    value={type === 'range' ? filters.guests : undefined}
                    onChange={type === 'range' ? handleNumber : handleValue}
                />
                {type === 'range' && <span className='ms-2'>{filters.guests}</span>}
            </div>
        </div>
    );
};
