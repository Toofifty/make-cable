import React, { MouseEvent } from 'react';

import LazyOption from 'components/lazy-option';
import { PartOption, PartName } from 'utils/types';
import label from 'utils/labels';

import { ReactComponent as CloseIcon } from 'assets/close-icon.svg';

import './platter.scss';

interface PlatterProps {
    partName: PartName;
    options: PartOption<any>[];
    selected?: PartOption<any>;
    onSelect: (value: PartOption<any>) => void;
    onClose?: (event: MouseEvent) => void;
}
const Platter: React.FC<PlatterProps> = ({
    partName,
    options,
    selected,
    onSelect,
    onClose,
}) => (
    <>
        <div className="platter">
            <div className="platter__header">
                <span className="platter__title">{label(partName)}</span>
                <button className="platter__close-button" onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
            <div className="platter__options">
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
                        active={selected === option}
                    />
                ))}
            </div>
        </div>
        <div className="platter-backdrop" onClick={onClose} />
    </>
);

export default Platter;
