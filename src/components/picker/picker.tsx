import React, { useState, useEffect } from 'react';
import { PartName, PartOption } from '../../utils/types';
import useStore from '../../utils/hooks/useStore';
import Selected from './selected';
import label from '../../utils/labels';

import './picker.scss';
import Platter from './platter';

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
            <Selected value={selected} active={isOpen} />
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
