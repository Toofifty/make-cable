import React, { MouseEvent } from 'react';

import LazyOption from 'components/lazy-option';
import { PartOption, PartName } from 'utils/types';
import label from 'utils/labels';

import { ReactComponent as CloseIcon } from 'assets/close-icon.svg';

import './platter.scss';
import Modal from 'components/modal/modal';

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
    <Modal title={label(partName)} onClose={onClose}>
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
                    active={selected === option}
                />
            ))}
        </div>
    </Modal>
);

export default Platter;
