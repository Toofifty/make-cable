import { CablerState, PartOption } from './types';
import { ALL_PARTS } from '../data/parts';
import { isLength } from './typecheck';
import partOptions from '../data/parts';

export const squish = (state: CablerState): string =>
    `${ALL_PARTS.map(partName => {
        const part = state.parts[partName];
        return part
            ? isLength(part.value)
                ? part.value.value
                : part.value
            : '-';
    }).join('/')}/${state.notes}`;

export const parse = (hash: string): CablerState =>
    hash.split('/').reduce(
        (state, data, index) => {
            const partName = ALL_PARTS[index];

            if (!partName)
                return {
                    ...state,
                    notes: data,
                };

            const value = (partOptions as any)[partName].find(
                (option: PartOption) =>
                    isLength(option.value)
                        ? option.value.value === Number(data)
                        : option.value === data
            );

            return value
                ? { ...state, parts: { ...state.parts, [partName]: value } }
                : state;
        },
        { parts: {}, notes: '' } as CablerState
    );
