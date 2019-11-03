import { OptionDefinition, PartName } from '../../utils/types';
import connectorA from './connector-a';
import connectorB from './connector-a';
import sleeving from './sleeving';
import heatshrink from './heatshrink';

import { ReactComponent as NoThanks } from './picker-icons/no-thanks.svg';

export { default as defaultParts } from './default-parts';

export const ALL_PARTS: PartName[] = [
    'connectorA',
    'connectorB',
    'heatshrink',
    'cableLength',
    'sleeving',
    'doubleSleeving',
    'coil',
    'coilLength',
    'detachable',
];

export default {
    connectorA,
    connectorB,
    cableLength: [
        {
            value: { value: 0.5, units: 'm' },
            label: '0.5 metres',
        },
        {
            value: { value: 1, units: 'm' },
            label: '1 metre',
            stocked: ['jujucables'],
        },
        {
            value: { value: 1.5, units: 'm' },
            label: '1.5 metres',
            stocked: ['jujucables'],
        },
        {
            value: { value: 2, units: 'm' },
            label: '2 metres',
        },
        {
            value: { value: 3, units: 'm' },
            label: '3 metres',
        },
    ],
    sleeving,
    doubleSleeving: [
        {
            value: 'none',
            label: 'No thanks',
            icon: NoThanks,
        },
    ],
    coil: [
        {
            value: 'none',
            label: 'No thanks',
            icon: NoThanks,
        },
    ],
    coilLength: [
        {
            value: { value: 5, units: 'cm' },
            label: '5 centimetres',
        },
        {
            value: { value: 10, units: 'cm' },
            label: '10 centimetres',
        },
        {
            value: { value: 15, units: 'cm' },
            label: '15 centimetres',
        },
        {
            value: { value: 20, units: 'cm' },
            label: '20 centimetres',
        },
        {
            value: { value: 25, units: 'cm' },
            label: '25 centimetres',
        },
    ],
    detachable: [
        {
            value: 'none',
            label: 'No thanks',
            icon: NoThanks,
        },
    ],
    heatshrink,
} as OptionDefinition;
