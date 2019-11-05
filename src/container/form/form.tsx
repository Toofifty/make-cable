import React from 'react';
import { Picker, BackgroundColorPicker, Contribute } from 'components';
import { ALL_PART_NAMES } from 'data';

import './form.scss';

interface FormProps {
    allOptions: any;
}

const Form: React.FC<{
    allOptions: any;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
}> = ({ allOptions, backgroundColor, setBackgroundColor }) => (
    <div className="form">
        <div className="form__header">
            <span className="form__title">make-cable</span>
            <span className="form__header-right">
                <Contribute />
                <BackgroundColorPicker
                    selected={backgroundColor}
                    onSelect={setBackgroundColor}
                />
            </span>
        </div>
        <div className="form__content">
            {ALL_PART_NAMES.map(partName => (
                <Picker
                    key={partName}
                    partName={partName}
                    options={allOptions[partName]}
                />
            ))}
        </div>
    </div>
);

export default Form;
