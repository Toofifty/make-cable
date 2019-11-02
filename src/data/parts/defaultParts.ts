import { PartName } from '../../utils/types';

interface DefaultOptionData {
    graphic?: React.FC;
    color?: string;
}

export default {
    heatshrink: {
        color: '#141B1F',
    },
    sleeving: {
        color: 'white',
    },
} as Record<PartName, DefaultOptionData>;
