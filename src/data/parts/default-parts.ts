import { PartName } from '../../utils/types';
import mapDict from '../../utils/mapDict';

interface DefaultOptionData {
    graphic?: React.FC;
    color?: string;
    pattern?: string;
}

export default mapDict(
    {
        heatshrink: {
            color: '#141B1F',
        },
        sleeving: {
            color: 'white',
        },
    } as Record<PartName, DefaultOptionData>,
    (key, value) => [key, { ...value, placeholder: true }]
);
