import React, { MouseEvent } from 'react';

import { halt } from 'utils/misc';

import { ReactComponent as CloseIcon } from 'assets/close-icon.svg';

import './modal.scss';

const Modal: React.FC<{
    title: string;
    onClose?: (event: MouseEvent) => void;
}> = ({ title, children, onClose }) => (
    <>
        <div className="modal" onClick={halt()}>
            <div className="modal__header">
                <span className="modal__title">{title}</span>
                <button className="modal__close-button" onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
            <div className="modal__body">{children}</div>
        </div>
        <div className="modal-backdrop" onClick={onClose} />
    </>
);

export default Modal;
