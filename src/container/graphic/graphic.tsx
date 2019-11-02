import React, { useMemo } from 'react';
import TopSection from './top-section';
import BottomSection from './bottom-section';

import './graphic.scss';
import useStore from '../../utils/hooks/useStore';

const Graphic: React.FC = () => {
    const [cableLength] = useStore(state =>
        state.parts.cableLength ? state.parts.cableLength.value.value : 0.5
    );

    const scale = useMemo(() => {
        return 0.5 / cableLength;
    }, [cableLength]);

    return (
        <div className="graphic" style={{ ['--scale' as any]: scale }}>
            <TopSection />
            <BottomSection />
        </div>
    );
};

export default Graphic;
