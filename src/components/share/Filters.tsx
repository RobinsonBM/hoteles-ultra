import { useState } from 'react';
import { FiltersModel, FiltersProps } from '../../types';


export const Filters: React.FC<FiltersProps> = ({ label, type, name, placeholder, min, max }) => {
    const [guests, setGuests] = useState(min);
    const [filters, setFilters] = useState<FiltersModel>({})

    const handleNumber = ({ target }: any) => {
        const { value } = target;
        setGuests(value);
    };
    
    const handleValue = ({ target }: any) => {
        const { value } = target;
        console.log("🚀 ~ handleValue ~ value:", value)
        
    };

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
                    value={type === 'range' ? guests : undefined}
                    onChange={type === 'range' ? handleNumber : handleValue}
                />
                {type === 'range' && <span className='ms-2'>{guests}</span>}
            </div>
        </div>
    );
};
