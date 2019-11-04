import React, { MouseEvent as ReactMouseEvent } from 'react';
import cx from 'classnames';

import { isLength } from 'utils/typecheck';
import { PartOption, Length } from 'utils/types';

import './option.scss';

const ColorOptionView: React.FC<{ color: string }> = ({ color }) => (
    <div
        className="option__view option__view--color"
        style={{ ['--color' as any]: color }}
    />
);

const PatternOptionView: React.FC<{ pattern: string }> = ({ pattern }) => (
    <img className="option__view option__view--pattern" src={pattern} />
);

const IconOptionView: React.FC<{ Icon: React.FC }> = ({ Icon }) => (
    <span className="option__view option__view--icon">
        <Icon />
    </span>
);

const LengthOptionView: React.FC<{ length: Length }> = ({ length }) => (
    <span className="option__view option__view--length">{`${length.value}${length.units}`}</span>
);

const UnknownOptionView: React.FC = () => (
    <span className="option__view option__view--icon">?</span>
);

const OptionView: React.FC<{
    value: PartOption<any>;
}> = ({ value }) => {
    if (value.pattern) {
        return <PatternOptionView pattern={value.pattern} />;
    }

    if (value.icon) {
        return <IconOptionView Icon={value.icon} />;
    }

    if (value.color) {
        return <ColorOptionView color={value.color} />;
    }

    if (isLength(value.value)) {
        return <LengthOptionView length={value.value} />;
    }

    return <UnknownOptionView />;
};

const Option: React.FC<{
    type: 'selected' | 'platter';
    value?: PartOption<any>;
    active?: boolean;
    onClick?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ type, value, active, onClick }) => (
    <button
        className={cx(`option option--${type}`, active && 'option--active')}
        onClick={onClick}
    >
        {value && <OptionView value={value} />}
        <label className="option__label">{value ? value.label : 'None'}</label>
    </button>
);

export default Option;
