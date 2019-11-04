import { useContext, Dispatch, useMemo } from 'react';
import { RootContext } from 'container/root';
import { RootState, RootAction } from 'utils/types';

const useStore = <T>(
    getter: (state: RootState) => T
): [T, Dispatch<RootAction>] => {
    const { state, dispatch } = useContext(RootContext);
    return [useMemo(() => getter(state), [getter, state]), dispatch];
};

export default useStore;
