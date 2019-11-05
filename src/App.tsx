import React, { useLayoutEffect, useCallback, useState } from 'react';
import Root from 'container/root';
import { allParts } from 'data';
import { RootState } from 'utils/types';
import { squish, parse } from 'utils/urls';

export default (() => {
    const [initialState, setInitialState] = useState<RootState | undefined>(
        undefined
    );

    const parseStateFromUrl = useCallback(() => {
        try {
            const hash = window.location.hash.replace('#', '');
            setInitialState(parse(atob(hash)));
        } catch {}
    }, []);

    const updateUrl = useCallback((state: RootState) => {
        const newUrl = `#${btoa(squish(state))}`;
        if (window.location.hash !== newUrl) {
            window.history.pushState(newUrl, '', newUrl);
        }
    }, []);

    useLayoutEffect(() => {
        parseStateFromUrl();
        window.addEventListener('popstate', parseStateFromUrl);

        return () => {
            window.removeEventListener('popstate', parseStateFromUrl);
        };
    }, [parseStateFromUrl]);

    return (
        <Root
            allOptions={allParts}
            onUpdate={updateUrl}
            initialState={initialState}
        />
    );
}) as React.FC;
