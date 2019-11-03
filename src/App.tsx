import React, { useLayoutEffect, useCallback, useState } from 'react';
import Cabler from './container/cabler';
import partOptions from './data/parts';
import { CablerState } from './utils/types';
import { squish, parse } from './utils/urls';

const App: React.FC = () => {
    const [initialState, setInitialState] = useState<CablerState | undefined>(
        undefined
    );

    const parseStateFromUrl = useCallback(() => {
        try {
            const hash = window.location.hash.replace('#', '');
            setInitialState(parse(atob(hash)));
        } catch {}
    }, []);

    const updateUrl = useCallback((state: CablerState) => {
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
        <Cabler
            allOptions={partOptions}
            onUpdate={updateUrl}
            initialState={initialState}
        />
    );
};

export default App;
