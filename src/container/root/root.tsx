import React, { useReducer, createContext, useEffect, useState } from 'react';
import cx from 'classnames';
import Graphic from 'container/graphic';
import Form from 'container/form';
import BackgroundColorPicker from 'components/background-color-picker';
import Contribute from 'components/contribute';
import { RootAction, RootState, Store } from 'utils/types';

import reducer from './reducer';

import './root.scss';

interface RootProps {
    allOptions: any;
    initialState?: RootState;
    onUpdate?: (state: RootState) => void;
}

const getDefaultState = (): RootState => ({
    parts: {},
    notes: '',
});

export const RootContext = createContext<Store<RootState, RootAction>>({
    state: getDefaultState(),
    dispatch: () => getDefaultState(),
});

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
                <BackgroundColorPicker
                    selected={backgroundColor}
                    onSelect={setBackgroundColor}
                />
                <Graphic />
                <Form allOptions={allOptions} />
                <Contribute />
            </div>
        </RootContext.Provider>
    );
};

export default Root;
