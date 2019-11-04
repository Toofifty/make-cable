import React from 'react';
import TopSection from './components/top-section';
import BottomSection from './components/bottom-section';

import './graphic.scss';

const Graphic: React.FC = () => (
    <div className="graphic">
        <TopSection />
        <BottomSection />
    </div>
);

export default Graphic;
