import React from 'react';
import cx from 'classnames';
import { PartOption } from 'utils/types';

import Option from '../option';

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
                    <Option classPrefix="platter__option-" option={option} />
                    <label className="platter__option-label">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
        <div className="platter-backdrop" />
    </>
);

export default Platter;
