import { MouseEvent } from 'react';

export const halt = (callback?: (event?: MouseEvent) => void) => (
    event: MouseEvent
): void => {
    event.stopPropagation();
    event.preventDefault();
    callback && callback();
};

export const sleep = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));
