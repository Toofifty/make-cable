import React from 'react';
import cx from 'classnames';
import { PartOption } from '../../../utils/types';

import './selected.scss';

interface SelectedProps {
    value?: PartOption<any>;
    active: boolean;
}

const Selected: React.FC<SelectedProps> = ({ value, active }) => (
    <div
        className={cx('selected', {
            'selected--chosen': value,
            'selected--active': active,
        })}
    >
        {value ? (
            <span className="selected__icon">
                {value.icon ? (
                    <value.icon />
                ) : value.value.units ? (
                    `${value.value.value}${value.value.units}`
                ) : (
                    '?'
                )}
            </span>
        ) : (
            <span className="selected__empty">?</span>
        )}
        <label className="selected__label">
            {value ? value.label : 'None'}
        </label>
    </div>
);

export default Selected;
