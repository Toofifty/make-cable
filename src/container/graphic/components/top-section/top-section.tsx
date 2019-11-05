import React, { useMemo } from 'react';
import useStore from '../../../../utils/hooks/useStore';

import './top-section.scss';
import { defaultParts } from 'data';
import Cable from '../cable';
import Heatshrink from '../heatshrink';

interface TopSectionProps {}

/**
 * Top section
 *
 * Connector A
 * Heatshrink
 * Cable
 * Aviator
 * Cable
 * Coil
 */
const TopSection: React.FC<TopSectionProps> = () => {
    const [connectorA] = useStore(state => state.parts.connectorA);
    const [heatshrink = defaultParts.heatshrink] = useStore(
        state => state.parts.heatshrink
    );
    const [sleeving = defaultParts.sleeving] = useStore(
        state => state.parts.sleeving
    );
    const [aviator] = useStore(state => state.parts.aviator);

    const heatshrinkSize = useMemo(() => {
        if (!connectorA) return 'lg';
        if (connectorA.value.startsWith('usb-a')) {
            return 'lg';
        }
        if (connectorA.value.startsWith('usb-c')) {
            return 'md';
        }
        return 'sm';
    }, [connectorA]);

    return (
        <div className="top-section">
            {connectorA && (
                <div className="top-section__connector-a">
                    <img src={connectorA.graphic} alt="doot" />
                </div>
            )}
            {heatshrink && (
                <div className="top-section__heatshrink">
                    <Heatshrink
                        color={heatshrink.color || 'red'}
                        size={heatshrinkSize}
                    />
                </div>
            )}
            {sleeving && (
                <div className="top-section__cable">
                    <Cable
                        length={0.5}
                        color={sleeving.color || 'red'}
                        sleeving={sleeving.pattern}
                    />
                </div>
            )}
        </div>
    );
};

export default TopSection;
