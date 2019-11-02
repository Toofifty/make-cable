import { Dispatch } from 'react';

type ConnectorType =
    | 'usb-a-silver'
    | 'usb-a-gold'
    | 'usb-c-silver'
    | 'usb-c-gold'
    | 'usb-mini-silver'
    | 'usb-mini-gold';
type CoilType = 'none' | 'coil-a' | 'coil-b' | 'coil-ab';
type DetachableType = 'none' | '4-pin' | '5-pin';

type CablerActionType = 'SET_PART' | 'SET_ALL';

interface PartOption<T = string> {
    value: T;
    label: string;
    stocked?: string[];
    icon?: React.FC;
    graphic?: React.FC;
    color?: string;
}

interface Store<T, A> {
    state: T;
    dispatch: Dispatch<CablerAction>;
}

interface CablerState {
    parts: ChosenParts;
    notes: string;
}

interface CablerAction {
    type: CablerActionType;
    payload: any;
}

interface ChosenParts {
    connectorA?: PartOption<ConnectorType>;
    connectorB?: PartOption<ConnectorType>;
    cableLength?: PartOption<Length>;
    coil?: PartOption<CoilType>;
    coilLength?: PartOption<Length>;
    detachable?: PartOption<DetachableType>;
    sleeving?: PartOption<string>;
    heatshrink?: PartOption<string>;
    doubleSleeving?: PartOption<string>;
}

type PartName = keyof ChosenParts;

interface Length {
    units: 'in' | 'ft' | 'cm' | 'm';
    value: number;
}

interface OptionDefinition {
    connectorA: PartOption<ConnectorType>[];
    connectorB: PartOption<ConnectorType>[];
    cableLength: PartOption<Length>[];
    coil: PartOption<CoilType>[];
    coilLength: PartOption<Length>[];
    detachable: PartOption<DetachableType>[];
    sleeving: PartOption<string>[];
    doubleSleeving: PartOption<string>[];
}

interface Stockist {
    name: string;
    label: string;
    url: string;
    location: string;
}
