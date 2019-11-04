import React, { useState, useEffect, useCallback, MouseEvent } from 'react';

import Option from 'components/option';
import { PartName, PartOption } from 'utils/types';
import useStore from 'utils/hooks/useStore';
import label from 'utils/labels';

import Platter from './platter';

import './picker.scss';

const Picker: React.FC<{
    partName: PartName;
    options: PartOption[];
}> = ({ partName, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, dispatch] = useStore(state => state.parts[partName]);

    const onClose = useCallback((event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setIsOpen(false);
    }, []);

    return (
        <div className="picker" onClick={() => setIsOpen(true)}>
            <label className="picker__part-name">{label(partName)}</label>
            <Option type="selected" value={selected} active={isOpen} />
            {isOpen && (
                <Platter
                    partName={partName}
                    options={options}
                    selected={selected}
                    onSelect={option =>
                        dispatch({
                            type: 'SET_PART',
                            payload: { part: partName, option },
                        })
                    }
                    onClose={onClose}
                />
            )}
        </div>
    );
};

export default Picker;
