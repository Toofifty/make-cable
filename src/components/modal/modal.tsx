import React, { MouseEvent, useState, useCallback } from 'react';
import cx from 'classnames';

import { halt, sleep } from 'utils/misc';

import { ReactComponent as CloseIcon } from 'assets/close-icon.svg';

import './modal.scss';

const Modal: React.FC<{
    title: string;
    onClose?: (event: MouseEvent) => void;
}> = ({ title, children, onClose }) => {
    const [isExiting, setIsExiting] = useState(false);

    const onCloseAnimate = useCallback(async (event: MouseEvent) => {
        event.persist();
        setIsExiting(true);
        await sleep(250);
        setIsExiting(false);
        onClose && onClose(event);
    }, []);

    return (
        <>
            <div
                className={cx('modal', isExiting && 'modal--exiting')}
                onClick={halt()}
            >
                <div className="modal__header">
                    <span className="modal__title">{title}</span>
                    <button
                        className="modal__close-button"
                        onClick={onCloseAnimate}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal__body">{children}</div>
            </div>
            <div
                className={cx(
                    'modal-backdrop',
                    isExiting && 'modal-backdrop--exiting'
                )}
                onClick={onCloseAnimate}
            />
        </>
    );
};

export default Modal;
