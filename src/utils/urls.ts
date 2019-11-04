import { ALL_PARTS } from 'data/parts';
import partOptions from 'data/parts';
import { RootState, PartOption } from 'utils/types';
import { isLength } from 'utils/typecheck';

export const squish = (state: RootState): string =>
    `${ALL_PARTS.map(partName => {
        const part = state.parts[partName];
        return part
            ? isLength(part.value)
                ? `${part.value.value}:${part.value.units}`
                : part.value
            : '-';
    }).join('/')}/${state.notes}`;

export const parse = (hash: string): RootState =>
    hash.split('/').reduce(
        (state, data, index) => {
            const partName = ALL_PARTS[index];

            if (!partName)
                return {
                    ...state,
                    notes: data,
                };

            const optionValue = (partOptions as any)[partName].find(
                ({ value }: PartOption) =>
                    isLength(value)
                        ? `${value.value}:${value.units}` === data
                        : value === data
            );

            return optionValue
                ? {
                      ...state,
                      parts: { ...state.parts, [partName]: optionValue },
                  }
                : state;
        },
        { parts: {}, notes: '' } as RootState
    );
