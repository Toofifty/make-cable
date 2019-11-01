import React from 'react';
import Picker from '../../components/picker';
import { PartName } from '../../utils/types';

import './form.scss';

interface FormProps {
    allOptions: any;
}

const ALL_PARTS: PartName[] = [
    'connectorA',
    'connectorB',
    'cableLength',
    'sleeving',
    'doubleSleeving',
    'heatshrink',
    'detachable',
    'coil',
    'coilLength',
];

const Form: React.FC<FormProps> = ({ allOptions }) => (
    <div className="form">
        {ALL_PARTS.map(partName => (
            <Picker
                key={partName}
                partName={partName}
                options={allOptions[partName]}
            />
        ))}
    </div>
);

export default Form;
