import React, { useReducer, createContext, useEffect } from 'react';
import { CablerAction, CablerState, Store } from '../../utils/types';
import Graphic from '../graphic/graphic';
import Form from '../form';
import './cabler.scss';

interface CablerProps {
    allOptions: any;
    initialState?: CablerState;
    onUpdate?: (state: CablerState) => void;
}

const reducer = (
    { parts, notes }: CablerState,
    { type, payload }: CablerAction
): CablerState => {
    switch (type) {
        case 'SET_PART':
            return {
                parts: { ...parts, [payload.part]: payload.option },
                notes,
            };
    }
    return { parts, notes };
};

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
        initialState,
        getDefaultState
    );

    useEffect(() => onUpdate && onUpdate(state), [onUpdate, state]);

    return (
        <CablerContext.Provider value={{ state, dispatch }}>
            <div className="cabler">
                <Graphic />
                <Form allOptions={allOptions} />
            </div>
        </CablerContext.Provider>
    );
};

export default Cabler;
