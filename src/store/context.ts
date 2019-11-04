import { createContext } from 'react';
import { Store, RootState, RootAction } from 'utils/types';

import getDefaultState from './state';

const RootContext = createContext<Store<RootState, RootAction>>({
    state: getDefaultState(),
    dispatch: () => getDefaultState(),
});

export default RootContext;
