import { PartOption, ConnectorType } from '../../utils/types';
import { ReactComponent as USBASilver } from './picker-icons/usb-a-silver.svg';
import { ReactComponent as USBAGold } from './picker-icons/usb-a-gold.svg';
import { ReactComponent as USBCSilver } from './picker-icons/usb-c-silver.svg';
import { ReactComponent as USBCGold } from './picker-icons/usb-c-gold.svg';
import { ReactComponent as USBMiniASilver } from './picker-icons/usb-mini-silver.svg';
import { ReactComponent as USBMiniAGold } from './picker-icons/usb-mini-gold.svg';

import { ReactComponent as USBASilverGraphic } from './graphic-icons/usb-a-silver.svg';
import { ReactComponent as USBAGoldGraphic } from './graphic-icons/usb-a-gold.svg';

export default [
    {
        value: 'usb-a-silver',
        label: 'USB-A',
        icon: USBASilver,
        graphic: USBASilverGraphic,
        stocked: ['zapcables'],
    },
    {
        value: 'usb-a-gold',
        label: 'USB-A (Gold)',
        icon: USBAGold,
        graphic: USBAGoldGraphic,
        stocked: ['zapcables'],
    },
    {
        value: 'usb-c-silver',
        label: 'USB-C',
        icon: USBCSilver,
        stocked: ['zapcables', 'jujucables'],
    },
    {
        value: 'usb-c-gold',
        label: 'USB-C (Gold)',
        icon: USBCGold,
        stocked: ['zapcables'],
    },
    {
        value: 'usb-mini-silver',
        label: 'USB Mini',
        icon: USBMiniASilver,
        stocked: ['zapcables', 'jujucables'],
    },
    {
        value: 'usb-mini-gold',
        label: 'USB Mini (Gold)',
        icon: USBMiniAGold,
        stocked: ['zapcables'],
    },
] as PartOption<ConnectorType>[];
