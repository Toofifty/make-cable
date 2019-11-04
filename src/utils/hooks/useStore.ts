import { useContext, Dispatch, useMemo } from 'react';
import { RootState, RootAction } from '../types';
import { RootContext } from '../../container/root';

const useStore = <T>(
    getter: (state: RootState) => T
): [T, Dispatch<RootAction>] => {
    const { state, dispatch } = useContext(RootContext);
    return [useMemo(() => getter(state), [getter, state]), dispatch];
};

export default useStore;
