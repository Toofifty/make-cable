import { OptionDefinition } from '../../utils/types';

import { ReactComponent as USBASilver } from './picker-icons/usb-a-silver.svg';
import { ReactComponent as USBAGold } from './picker-icons/usb-a-gold.svg';
import { ReactComponent as USBCSilver } from './picker-icons/usb-c-silver.svg';
import { ReactComponent as USBCGold } from './picker-icons/usb-c-gold.svg';
import { ReactComponent as USBMiniASilver } from './picker-icons/usb-mini-silver.svg';
import { ReactComponent as USBMiniAGold } from './picker-icons/usb-mini-gold.svg';
import { ReactComponent as NoThanks } from './picker-icons/no-thanks.svg';

import { ReactComponent as USBASilverGraphic } from './graphic-icons/usb-a-silver.svg';
import { ReactComponent as USBAGoldGraphic } from './graphic-icons/usb-a-gold.svg';

export { default as defaultParts } from './defaultParts';

export default {
    connectorA: [
        {
            value: 'usb-a-silver',
            label: 'USB-A',
            icon: USBASilver,
            graphic: USBASilverGraphic,
            stocked: ['zapcables', 'jujucables'],
        },
        {
            value: 'usb-a-gold',
            label: 'USB-A (Gold)',
            icon: USBAGold,
            graphic: USBAGoldGraphic,
            stocked: ['zapcables'],
        },
        {
            value: 'usb-c-silver',
            label: 'USB-C',
            icon: USBCSilver,
            stocked: ['zapcables'],
        },
        {
            value: 'usb-c-gold',
            label: 'USB-C (Gold)',
            icon: USBCGold,
            stocked: ['zapcables'],
        },
        {
            value: 'usb-mini-silver',
            label: 'USB Mini',
            icon: USBMiniASilver,
        },
        {
            value: 'usb-mini-gold',
            label: 'USB Mini (Gold)',
            icon: USBMiniAGold,
        },
    ],
    connectorB: [
        {
            value: 'usb-a-silver',
            label: 'USB-A',
            icon: USBASilver,
            graphic: USBASilverGraphic,
            stocked: ['zapcables'],
        },
        {
            value: 'usb-a-gold',
            label: 'USB-A (Gold)',
            icon: USBAGold,
            graphic: USBAGoldGraphic,
            stocked: ['zapcables'],
        },
        {
            value: 'usb-c-silver',
            label: 'USB-C',
            icon: USBCSilver,
            stocked: ['zapcables', 'jujucables'],
        },
        {
            value: 'usb-c-gold',
            label: 'USB-C (Gold)',
            icon: USBCGold,
            stocked: ['zapcables'],
        },
        {
            value: 'usb-mini-silver',
            label: 'USB Mini',
            icon: USBMiniASilver,
            stocked: ['zapcables', 'jujucables'],
        },
        {
            value: 'usb-mini-gold',
            label: 'USB Mini (Gold)',
            icon: USBMiniAGold,
            stocked: ['zapcables'],
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
    sleeving: [
        {
            value: 'white',
            label: 'White',
            color: 'white',
        },
        {
            value: 'red',
            label: 'Red',
            color: 'red',
        },
        {
            value: 'green',
            label: 'Green',
            color: 'green',
        },
    ],
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
    heatshrink: [
        {
            value: 'white',
            label: 'White',
            color: 'white',
        },
        {
            value: 'red',
            label: 'Red',
            color: 'red',
        },
        {
            value: 'green',
            label: 'Green',
            color: 'green',
        },
    ],
} as OptionDefinition;
