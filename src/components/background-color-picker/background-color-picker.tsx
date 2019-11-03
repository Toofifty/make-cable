import React from 'react';
import cx from 'classnames';

import './background-color-picker.scss';

const COLOR_OPTIONS = ['blue', 'black', 'orange', 'white'];

interface BackgroundColorPickerProps {
    selected?: string;
    onSelect: (value: string) => void;
}

const BackgroundColorPicker: React.FC<BackgroundColorPickerProps> = ({
    selected = 'black',
    onSelect,
}) => (
    <div
        className={cx(
            'background-color-picker',
            `background-color-picker--${selected}`
        )}
    >
        {COLOR_OPTIONS.map(color => (
            <button
                key={color}
                className={cx(
                    'background-color-picker__swatch',
                    `background-color-picker__swatch--${color}`
                )}
                onClick={() => onSelect(color)}
            />
        ))}
    </div>
);

export default BackgroundColorPicker;
