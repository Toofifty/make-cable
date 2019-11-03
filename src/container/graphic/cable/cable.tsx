import React, { useMemo } from 'react';
import './cable.scss';

interface CableProps {
    length: number;
    color: string;
    sleeving?: string;
}

const Cable: React.FC<CableProps> = ({ length, color, sleeving }) => {
    const lengthPx = useMemo(() => length * 2600, [length]);
    return (
        <svg
            width="14"
            height={lengthPx}
            viewBox={`0 0 14 ${lengthPx}`}
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
                height={lengthPx}
                fill={sleeving ? 'url(#sleevingpattern)' : color}
            />
        </svg>
    );
};

export default Cable;
