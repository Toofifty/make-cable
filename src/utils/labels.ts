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

const label = (name: keyof typeof LABEL_DEFINITIONS): string =>
    LABEL_DEFINITIONS[name];

export default label;
