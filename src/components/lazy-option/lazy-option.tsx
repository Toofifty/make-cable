import React, { MouseEvent as ReactMouseEvent } from 'react';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

import Option from 'components/option';

import { PartOption } from 'utils/types';

import './lazy-option.scss';

const LazyOption: React.FC<{
    type: 'selected' | 'platter';
    value?: PartOption<any>;
    active?: boolean;
    onClick?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ ...props }) => {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={cx('lazy-option', !inView && 'lazy-option--loading')}
        >
            {inView && <Option {...props} />}
        </div>
    );
};

export default LazyOption;
