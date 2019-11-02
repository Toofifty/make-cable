import React from 'react';
import useStore from '../../../utils/hooks/useStore';

import './top-section.scss';
import { defaultParts } from '../../../data/parts';
import Cable from '../cable';
import Heatshrink from '../heatshrink';

interface TopSectionProps {}

/**
 * Top section
 *
 * Connector A
 * Heatshrink
 * Cable
 * Detachable
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
    const [detachable] = useStore(state => state.parts.detachable);
    const [cableLength] = useStore(state => state.parts.cableLength);

    return (
        <div className="top-section">
            {connectorA && (
                <div className="top-section__connector-a">
                    {connectorA.graphic && <connectorA.graphic />}
                </div>
            )}
            {heatshrink && (
                <div className="top-section__heatshrink">
                    <Heatshrink color={heatshrink.color || 'red'} size="lg" />
                </div>
            )}
            {sleeving && (
                <div className="top-section__cable">
                    <Cable
                        length={cableLength ? cableLength.value.value : 0.5}
                        color={sleeving.color || 'red'}
                    />
                </div>
            )}
        </div>
    );
};

export default TopSection;
