import { useState } from 'react';

interface FiltersProps {
    type: string;
    placeholder?: string;
    name: string;
    label: string;
    min?: number;
    max?: number;
}

export const Filters: React.FC<FiltersProps> = ({ label, type, name, placeholder, min, max }) => {
    const [huespedes, setHuespedes] = useState(min);

    const handleNumber = ({ target }: any) => {
        const { value } = target;
        setHuespedes(value);
    };

    const handleValue = ({ target }: any) => {};

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
                    value={type === 'range' ? huespedes : undefined}
                    onChange={type === 'range' ? handleNumber : handleValue}
                />
                {type === 'range' && <span className='ms-2'>{huespedes}</span>}
            </div>
        </div>
    );
};
