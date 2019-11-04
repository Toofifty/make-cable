import React from 'react';
import cx from 'classnames';
import { PartOption } from 'utils/types';

import Option from '../option';

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
        {value && <Option option={value} classPrefix="selected__" />}
        <label className="selected__label">
            {value ? value.label : 'None'}
        </label>
    </div>
);

export default Selected;
