import { RootState } from 'utils/types';

const getDefaultState = (): RootState => ({
    parts: {},
    notes: '',
});

export default getDefaultState;
