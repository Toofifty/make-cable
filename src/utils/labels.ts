const LABEL_DEFINITIONS = {
    connectorA: 'Connector A',
    connectorB: 'Connector B',
    heatshrink: 'Heatshrink',
    cableLength: 'Cable length',
    sleeving: 'Sleeving',
    doubleSleeving: 'Double sleeving',
    detachable: 'Detachable?',
    coil: 'Coil?',
    coilLength: 'Coil length',
};

export const label = (name: keyof typeof LABEL_DEFINITIONS): string =>
    LABEL_DEFINITIONS[name];

export const fullUnits = (units: 'in' | 'ft' | 'cm' | 'm'): string =>
    ({ m: 'metre', cm: 'centimetre', ft: 'foot', in: 'inch' }[units]);

export default label;
