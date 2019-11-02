import React from 'react';

interface HeatshrinkProps {
    color: string;
    size: 'sm' | 'md' | 'lg';
}

const Heatshrink: React.FC<HeatshrinkProps> = ({ color, size }) => {
    return (
        <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M55.905 30.9001C55.9582 29.8357 56.8368 29 57.9025 29H70.0975C71.1633 29 72.0418 29.8357 72.095 30.9001L72.8919 46.839C72.9634 48.2681 73.2899 49.673 73.856 50.9872L86.021 79.2272C86.6669 80.7266 87 82.3421 87 83.9747V97C87 98.1046 86.1046 99 85 99H43C41.8954 99 41 98.1046 41 97V83.9747C41 82.3421 41.3331 80.7266 41.979 79.2272L54.144 50.9872C54.7101 49.673 55.0366 48.2681 55.1081 46.839L55.905 30.9001Z"
                fill={color}
            />
        </svg>
    );
};

export default Heatshrink;
