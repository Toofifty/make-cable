import React from 'react';
import cx from 'classnames';
import { PartOption } from '../../../utils/types';
import './platter.scss';

interface PlatterProps {
    options: PartOption<any>[];
    selected?: PartOption<any>;
    onSelect: (value: PartOption<any>) => void;
}

const Platter: React.FC<PlatterProps> = ({ options, selected, onSelect }) => {
    return (
        <div className="platter">
            {options.map(option => (
                <div
                    className={cx('platter__option', {
                        'platter__option--chosen': option === selected,
                    })}
                    onClick={() => onSelect(option)}
                    key={
                        option.value.units
                            ? `${option.value.value}${option.value.units}`
                            : option.value
                    }
                >
                    {option.color ? (
                        <div
                            className="platter__option-color"
                            style={{ ['--color' as any]: option.color }}
                        />
                    ) : (
                        <span className="platter__option-icon">
                            {option.icon ? (
                                <option.icon />
                            ) : option.value.units ? (
                                `${option.value.value}${option.value.units}`
                            ) : (
                                '?'
                            )}
                        </span>
                    )}
                    <label className="platter__option-label">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Platter;
