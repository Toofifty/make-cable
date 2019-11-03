import { Length } from './types';

export const isLength = (value: string | Length): value is Length =>
    typeof value === 'object';
