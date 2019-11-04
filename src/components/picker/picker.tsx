import React, { useState, useEffect } from 'react';

import Option from 'components/option';
import { PartName, PartOption } from 'utils/types';
import useStore from 'utils/hooks/useStore';
import label from 'utils/labels';

import Platter from './platter';

import './picker.scss';

interface PickerProps {
    partName: PartName;
    options: PartOption[];
}

const Picker: React.FC<PickerProps> = ({ partName, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [selected, dispatch] = useStore(state => state.parts[partName]);

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(false);
        };

        if (isOpen) window.addEventListener('click', onClickOutside);

        return () => {
            window.removeEventListener('click', onClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="picker" onClick={() => setIsOpen(true)}>
            <label className="picker__part-name">{label(partName)}</label>
            <Option type="selected" value={selected} active={isOpen} />
            {isOpen && (
                <Platter
                    options={options}
                    selected={selected}
                    onSelect={option =>
                        dispatch({
                            type: 'SET_PART',
                            payload: { part: partName, option },
                        })
                    }
                />
            )}
        </div>
    );
};

export default Picker;
