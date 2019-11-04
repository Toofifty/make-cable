import React, { useState, useCallback, MouseEvent } from 'react';

import Option from 'components/option';
import { PartName, PartOption } from 'utils/types';
import useStore from 'utils/hooks/useStore';
import label from 'utils/labels';
import { halt } from 'utils/misc';

import Platter from './platter';

import './picker.scss';
import PartInfoModal from 'components/part-info-modal';

const Picker: React.FC<{
    partName: PartName;
    options: PartOption[];
}> = ({ partName, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, dispatch] = useStore(state => state.parts[partName]);

    return (
        <div className="picker">
            <div className="picker__header">
                <label className="picker__part-name">{label(partName)}</label>
                {selected && selected.value !== 'none' && (
                    <PartInfoModal option={selected} partName={partName} />
                )}
            </div>
            <Option
                type="selected"
                value={selected}
                active={isOpen}
                onClick={() => setIsOpen(true)}
            />
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
                    onClose={halt(() => setIsOpen(false))}
                />
            )}
        </div>
    );
};

export default Picker;
