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

type RootActionType = 'SET_PART' | 'SET_ALL';

/**
 * Represents an option for a cable part
 */
interface PartOption<T = string> {
    /**
     * Generic value of the option. Must be unique per part.
     */
    value: T;

    /**
     * Label to display in interface
     */
    label: string;

    /**
     * List of vendors where this part is available.
     * Corresponds with Vendor.name
     */
    vendors?: string[];

    /**
     * Form interface icon
     */
    icon?: React.FC;

    /**
     * Graphic to render in the visualizer
     */
    graphic?: React.FC;

    /**
     * CSS color (hex, rgb, hsl, etc) for rendering the following parts:
     * - Heatshrink
     * - Sleeving (if pattern not provided)
     * - Double Sleeving (if pattern not provided)
     */
    color?: string;

    /**
     * Image URL for loading a pattern for both the interface and visualizer
     */
    pattern?: string;
}

interface Store<T, A> {
    state: T;
    dispatch: Dispatch<RootAction>;
}

interface RootState {
    parts: ChosenParts;
    notes: string;
}

interface RootAction {
    type: RootActionType;
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
    heatshrink: PartOption<string>[];
}

/**
 * A vendor or reseller that sells parts or custom builds cables
 */
interface Vendor {
    /**
     * Unique identifier name.
     * Corresponds with PartOption.vendors
     */
    name: string;

    /**
     * Label to display in interface
     */
    label: string;

    /**
     * Website URL
     */
    url: string;

    /**
     * Generic location (usually country or state)
     */
    location: string;
}
