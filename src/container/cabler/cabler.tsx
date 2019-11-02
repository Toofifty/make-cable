import React, { useReducer, createContext, useEffect, useState } from 'react';
import cx from 'classnames';
import { CablerAction, CablerState, Store } from '../../utils/types';
import Graphic from '../graphic';
import Form from '../form';
import reducer from './reducer';
import BackgroundColorPicker from '../../components/background-color-picker';

import { ReactComponent as Ruler } from '../../data/ruler.svg';

import './cabler.scss';

interface CablerProps {
    allOptions: any;
    initialState?: CablerState;
    onUpdate?: (state: CablerState) => void;
}

const getDefaultState = (): CablerState => ({
    parts: {},
    notes: '',
});

export const CablerContext = createContext<Store<CablerState, CablerAction>>({
    state: getDefaultState(),
    dispatch: () => getDefaultState(),
});

const Cabler: React.FC<CablerProps> = ({
    allOptions,
    initialState,
    onUpdate,
}) => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState || getDefaultState()
    );

    const [backgroundColor, setBackgroundColor] = useState('blue');

    useEffect(() => onUpdate && onUpdate(state), [onUpdate, state]);
    useEffect(
        () =>
            initialState &&
            dispatch({ type: 'SET_ALL', payload: initialState }),
        [initialState]
    );

    return (
        <CablerContext.Provider value={{ state, dispatch }}>
            <div className={cx('cabler', `cabler--${backgroundColor}`)}>
                <BackgroundColorPicker
                    selected={backgroundColor}
                    onSelect={setBackgroundColor}
                />
                <Ruler
                    style={{
                        transform: 'scale(0.5)',
                        transformOrigin: '0 0 0',
                    }}
                />
                <Graphic />
                <Form allOptions={allOptions} />
            </div>
        </CablerContext.Provider>
    );
};

export default Cabler;
