import { RootAction, RootState } from 'utils/types';

export default (
    { parts, notes }: RootState,
    { type, payload }: RootAction
): RootState => {
    switch (type) {
        case 'SET_PART':
            const update = {
                parts: { ...parts, [payload.part]: payload.option },
                notes,
            };
            if (payload.part === 'coil') {
                if (payload.option.value === 'none') {
                    update.parts.coilLength = undefined;
                }
            }
            return update;
        case 'SET_ALL':
            return { ...payload };
    }
    return { parts, notes };
};
