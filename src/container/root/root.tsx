import React, { useReducer, useEffect, useState } from 'react';
import cx from 'classnames';

import Graphic from 'container/graphic';
import Form from 'container/form';
import { RootState } from 'utils/types';
import getDefaultState from 'store/state';
import reducer from 'store/reducer';
import RootContext from 'store/context';

import './root.scss';

interface RootProps {
    allOptions: any;
    initialState?: RootState;
    onUpdate?: (state: RootState) => void;
}

const Root: React.FC<RootProps> = ({ allOptions, initialState, onUpdate }) => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState || getDefaultState()
    );

    const [backgroundColor, setBackgroundColor] = useState('black');

    useEffect(() => onUpdate && onUpdate(state), [onUpdate, state]);
    useEffect(
        () =>
            initialState &&
            dispatch({ type: 'SET_ALL', payload: initialState }),
        [initialState]
    );

    return (
        <RootContext.Provider value={{ state, dispatch }}>
            <div className={cx('root', `root--${backgroundColor}`)}>
                <Graphic />
                <Form
                    allOptions={allOptions}
                    backgroundColor={backgroundColor}
                    setBackgroundColor={setBackgroundColor}
                />
            </div>
        </RootContext.Provider>
    );
};

export default Root;
