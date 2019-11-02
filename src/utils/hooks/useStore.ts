import { useContext, Dispatch, useMemo } from 'react';
import { CablerState, CablerAction } from '../types';
import { CablerContext } from '../../container/cabler';

const useStore = <T>(
    getter: (state: CablerState) => T
): [T, Dispatch<CablerAction>] => {
    const { state, dispatch } = useContext(CablerContext);
    return [useMemo(() => getter(state), [getter, state]), dispatch];
};

export default useStore;
