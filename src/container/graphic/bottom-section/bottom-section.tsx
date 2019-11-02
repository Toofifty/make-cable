import React from 'react';
import useStore from '../../../utils/hooks/useStore';
import { defaultParts } from '../../../data/parts';
import Heatshrink from '../heatshrink';

import './bottom-section.scss';

interface BottomSectionProps {}

/**
 * Bottom section
 *
 * Connector B
 * Heatshrink
 * Cable
 */
const BottomSection: React.FC<BottomSectionProps> = () => {
    const [connectorB] = useStore(state => state.parts.connectorB);
    const [heatshrink = defaultParts.heatshrink] = useStore(
        state => state.parts.heatshrink
    );

    return (
        <div className="bottom-section">
            {connectorB && (
                <div className="bottom-section__connector-b">
                    {connectorB.graphic && <connectorB.graphic />}
                </div>
            )}
            {heatshrink && (
                <div className="bottom-section__heatshrink">
                    <Heatshrink color={heatshrink.color || 'red'} size="lg" />
                </div>
            )}
        </div>
    );
};

export default BottomSection;
