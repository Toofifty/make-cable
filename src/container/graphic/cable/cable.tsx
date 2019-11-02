import React, { useMemo } from 'react';

interface CableProps {
    length: number;
    color: string;
}

const Cable: React.FC<CableProps> = ({ length, color }) => {
    const lengthPx = useMemo(() => length * 400, [length]);
    return (
        <svg
            width="14"
            height={lengthPx}
            viewBox={`0 0 14 ${lengthPx}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="14" height={lengthPx} fill={color} />
        </svg>
    );
};

export default Cable;
