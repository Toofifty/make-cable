import React, { useMemo, useState, useEffect } from 'react';

import './cable.scss';

const CABLE_PADDING = 300;

const Cable: React.FC<{
    length: number;
    color: string;
    sleeving?: string;
}> = ({ length, color, sleeving }) => {
    const [screenHeight, setScreenHeight] = useState(1600);

    useEffect(() => {
        const updateScreenHeight = () =>
            setScreenHeight(window.innerHeight - CABLE_PADDING);
        window.addEventListener('resize', updateScreenHeight);
        updateScreenHeight();

        return () => {
            window.removeEventListener('resize', updateScreenHeight);
        };
    }, []);

    return (
        <svg
            width="14"
            height={screenHeight}
            viewBox={`0 0 14 ${screenHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cable"
        >
            {sleeving && (
                <pattern
                    id="sleevingpattern"
                    viewBox="0,0,14,280"
                    width="100%"
                    height="20%"
                >
                    <image
                        href={sleeving}
                        transform="rotate(90) translate(0 -50)"
                    />
                </pattern>
            )}
            <rect
                width="14"
                height={screenHeight}
                fill={sleeving ? 'url(#sleevingpattern)' : color}
            />
        </svg>
    );
};

export default Cable;
