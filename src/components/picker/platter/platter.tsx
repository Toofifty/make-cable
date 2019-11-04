import React from 'react';
import { PartOption } from 'utils/types';
import LazyOption from 'components/lazy-option';

import './platter.scss';

interface PlatterProps {
    options: PartOption<any>[];
    selected?: PartOption<any>;
    onSelect: (value: PartOption<any>) => void;
}
const Platter: React.FC<PlatterProps> = ({ options, selected, onSelect }) => (
    <>
        <div className="platter">
            {options.map(option => (
                <LazyOption
                    key={
                        option.value.units
                            ? `${option.value.value}${option.value.units}`
                            : option.value
                    }
                    onClick={() => onSelect(option)}
                    value={option}
                    type="platter"
                />
            ))}
        </div>
        <div className="platter-backdrop" />
    </>
);

export default Platter;
