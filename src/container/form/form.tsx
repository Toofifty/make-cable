import React from 'react';
import Picker from 'components/picker';
import { ALL_PARTS } from 'data/parts';

import './form.scss';

interface FormProps {
    allOptions: any;
}

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
