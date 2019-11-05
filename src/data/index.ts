import {
    Vendor,
    PartOption,
    PartName,
    Length,
    OptionDefinition,
} from 'utils/types';
import { parseCSV } from 'utils/parse-csv';

/* eslint-disable */
import vendorData from '!!csv-loader!./vendors.csv';
import sleevingData from '!!csv-loader!./parts/sleeving.csv';
import connectorAData from '!!csv-loader!./parts/connector-a.csv';
import connectorBData from '!!csv-loader!./parts/connector-b.csv';
import heatshrinkData from '!!csv-loader!./parts/heatshrink.csv';
import cableLengthData from '!!csv-loader!./parts/cable-length.csv';
import doubleSleevingData from '!!csv-loader!./parts/double-sleeving.csv';
import coilData from '!!csv-loader!./parts/coil.csv';
import coilLengthData from '!!csv-loader!./parts/coil-length.csv';
import aviatorData from '!!csv-loader!./parts/aviator.csv';
/* eslint-enable */

export { default as defaultParts } from './default-parts';

export const vendors = Object.fromEntries(
    parseCSV<Vendor>(vendorData).map((vendor: Vendor) => [vendor.name, vendor])
) as Record<string, Vendor>;

export const ALL_PART_NAMES: PartName[] = [
    'connectorA',
    'connectorB',
    'heatshrink',
    'cableLength',
    'sleeving',
    'doubleSleeving',
    'coil',
    'coilLength',
    'aviator',
];

export const sleeving = parseCSV<PartOption<string>>(sleevingData);

export const connectorA = parseCSV(connectorAData).map(option => ({
    ...option,
    icon: require(`./parts/picker-icons/${option.value}.svg`),
    graphic: require(`./parts/graphic-icons/${option.value}.svg`),
})) as PartOption<string>[];

export const connectorB = parseCSV(connectorBData).map(option => ({
    ...option,
    icon: require(`./parts/picker-icons/${option.value}.svg`),
    graphic: require(`./parts/graphic-icons/${option.value}.svg`),
})) as PartOption<string>[];

export const heatshrink = parseCSV<PartOption<string>>(heatshrinkData);

export const cableLength = parseCSV(cableLengthData).map(
    ({ units, value, ...option }) => ({
        ...option,
        value: { value, units },
    })
) as PartOption<Length>[];

console.log(cableLength[0]);

export const doubleSleeving = parseCSV(doubleSleevingData).map(option => ({
    ...option,
    icon:
        option.pattern || option.color
            ? undefined
            : require(`./parts/picker-icons/${option.value}.svg`),
})) as PartOption<string>[];

export const coil = parseCSV(coilData).map(option => ({
    ...option,
    icon: require(`./parts/picker-icons/${option.value}.svg`),
})) as PartOption<string>[];

export const coilLength = parseCSV(coilLengthData).map(
    ({ units, value, ...option }) => ({
        ...option,
        value: { value, units },
    })
) as PartOption<Length>[];

export const aviator = parseCSV(aviatorData).map(option => ({
    ...option,
    icon: require(`./parts/picker-icons/${option.value}.svg`),
})) as PartOption<string>[];

export const allParts = {
    sleeving,
    connectorA,
    connectorB,
    heatshrink,
    cableLength,
    doubleSleeving,
    coil,
    coilLength,
    aviator,
} as OptionDefinition;
