import React from 'react';
import TopSection from './top-section';
import BottomSection from './bottom-section';

import './graphic.scss';

const Graphic: React.FC = () => (
    <div className="graphic">
        <TopSection />
        <BottomSection />
    </div>
);

export default Graphic;
