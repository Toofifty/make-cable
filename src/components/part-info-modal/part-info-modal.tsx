import React, { useState } from 'react';

import Modal from 'components/modal';
import Option from 'components/option';
import { PartOption, PartName, Length, Vendor } from 'utils/types';
import { halt } from 'utils/misc';
import label, { fullUnits } from 'utils/labels';
import vendors from 'data/vendors';

import { ReactComponent as MoreIcon } from 'assets/more-icon.svg';

import './part-info-modal.scss';
import { isLength } from 'utils/typecheck';

const serializeValue = (value: string | Length) => {
    if (isLength(value)) {
        return `(${value.value}, ${fullUnits(value.units)})`;
    }
    return value;
};

const VendorLink: React.FC<{ vendor: Vendor }> = ({ vendor }) => (
    <li key={vendor.name} className="part-info-modal__vendor">
        <a href={vendor.url} className="part-info-modal__vendor-link">
            {vendor.label}
        </a>
        <span className="part-info-modal__vendor-location">
            ({vendor.location})
        </span>
    </li>
);

const PartInfoModal: React.FC<{
    option: PartOption<any>;
    partName: PartName;
}> = ({ option, partName }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="part-info-modal__more-icon"
                onClick={halt(() => setIsOpen(true))}
            >
                <MoreIcon />
            </button>
            {isOpen && (
                <Modal
                    title={`${label(partName)} // ${option.label}`}
                    onClose={halt(() => setIsOpen(false))}
                >
                    <section className="part-info-modal__body">
                        <div className="part-info-modal__left">
                            <Option value={option} type="info" />
                            <span className="part-info-modal__value">
                                {partName}:{serializeValue(option.value)}
                            </span>
                        </div>
                        <div className="part-info-modal__right">
                            <span className="part-info-modal__title">
                                Available from
                            </span>
                            <ul className="part-info-modal__vendors">
                                {(option.vendors || [])
                                    .sort()
                                    .map(vendorName => (
                                        <VendorLink
                                            key={vendorName}
                                            vendor={vendors[vendorName]}
                                        />
                                    ))}
                            </ul>
                        </div>
                    </section>
                </Modal>
            )}
        </>
    );
};

export default PartInfoModal;
