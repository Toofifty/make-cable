import { OptionDefinition } from '../utils/types';

import { ReactComponent as USBASilver } from './picker-icons/usb-a-silver.svg';
import { ReactComponent as USBAGold } from './picker-icons/usb-a-gold.svg';
import { ReactComponent as USBCSilver } from './picker-icons/usb-c-silver.svg';
import { ReactComponent as USBCGold } from './picker-icons/usb-c-gold.svg';
import { ReactComponent as NoThanks } from './picker-icons/no-thanks.svg';

export default {
    connectorA: [
        {
            value: 'usb-a-silver',
            label: 'USB A (Silver)',
            icon: USBASilver,
        },
        {
            value: 'usb-a-gold',
            label: 'USB A (Gold)',
            icon: USBAGold,
        },
        {
            value: 'usb-c-silver',
            label: 'USB C (Silver)',
            icon: USBCSilver,
        },
        {
            value: 'usb-c-gold',
            label: 'USB C (Gold)',
            icon: USBCGold,
        },
    ],
    connectorB: [
        {
            value: 'usb-a-silver',
            label: 'USB A (Silver)',
            icon: USBASilver,
        },
        {
            value: 'usb-a-gold',
            label: 'USB A (Gold)',
            icon: USBAGold,
        },
        {
            value: 'usb-c-silver',
            label: 'USB C (Silver)',
            icon: USBCSilver,
        },
        {
            value: 'usb-c-gold',
            label: 'USB C (Gold)',
            icon: USBCGold,
        },
    ],
    cableLength: [
        {
            value: { value: 0.5, units: 'm' },
            label: '0.5 metres',
        },
        {
            value: { value: 1, units: 'm' },
            label: '1 metre',
        },
        {
            value: { value: 1.5, units: 'm' },
            label: '1.5 metre',
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
    sleeving: [],
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
    heatshrink: [],
} as OptionDefinition;
